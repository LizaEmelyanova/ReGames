import { useState, useEffect, useRef } from 'react'
import './SnakeGame.css'
import smileImg from './img/smile.png'
import { ContainerPage, GameOverModal, Score, Flex } from 'shared/ui';

interface Position {
  x: number;
  y: number;
}

const SnakeGame = () => {
  const boardSize = 450;
  const cellSize = 30;
  const initialSnake = [{ x: 2 * cellSize, y: 2 * cellSize }];
  const initialDirection = 'RIGHT';

  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState(initialDirection);
  const [prevDirection, setPrevDirection] = useState(initialDirection);
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef(null);
  const [smileImage, setSmileImage] = useState<HTMLImageElement>();

  // Переменные для плавного движения
  const [lastMoveTime, setLastMoveTime] = useState(performance.now());
  const gameSpeed = 200; // Скорость игры в миллисекундах (постоянная скорость)
  const [prevSnakePositions, setPrevSnakePositions] = useState(snake);

  // Предзагрузка изображения "улыбки"
  useEffect(() => {
    const img = new Image();
    img.src = smileImg;
    img.onload = () => {
      console.log('Image loaded successfully');
      setSmileImage(img);
    };
    img.onerror = (e) => {
      console.error('Image failed to load', e);
    };
  }, []);

  function generateFood() {
    const maxPos = boardSize / cellSize;
    let newFoodPosition;

    do {
      newFoodPosition = {
        x: Math.floor(Math.random() * maxPos) * cellSize,
        y: Math.floor(Math.random() * maxPos) * cellSize,
      };
    } while (isFoodOnSnake(newFoodPosition));

    return newFoodPosition;
  }

  function isFoodOnSnake(position: Position) {
    return snake.some(segment => segment.x === position.x && segment.y === position.y);
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    let newDirection = direction;
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'DOWN') newDirection = 'UP';
        break;
      case 'ArrowDown':
        if (direction !== 'UP') newDirection = 'DOWN';
        break;
      case 'ArrowLeft':
        if (direction !== 'RIGHT') newDirection = 'LEFT';
        break;
      case 'ArrowRight':
        if (direction !== 'LEFT') newDirection = 'RIGHT';
        break;
      default:
        break;
    }
    if (newDirection !== direction) {
      setDirection(newDirection);
    }
  };

  const moveSnake = () => {
    setPrevDirection(direction); // Обновляем предыдущее направление здесь

    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= cellSize;
        break;
      case 'DOWN':
        head.y += cellSize;
        break;
      case 'LEFT':
        head.x -= cellSize;
        break;
      case 'RIGHT':
        head.x += cellSize;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      setScore((prevScore) => prevScore + 1);
    } else {
      newSnake.pop();
    }

    if (
      head.x < 0 || head.x >= boardSize ||
      head.y < 0 || head.y >= boardSize ||
      checkCollision(newSnake)
    ) {
      setGameOver(true);
      return;
    }

    setPrevSnakePositions(snake);
    setSnake(newSnake);
  };

  const checkCollision = (snake: Position[]) => {
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
        return true;
      }
    }
    return false;
  };

  // Добавляем функции drawCatmullRomCurve и catmullRom
  function drawCatmullRomCurve(ctx: CanvasRenderingContext2D, points: Position[]) {
    if (points.length < 2) return;

    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = i === 0 ? points[0] : points[i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = i + 2 < points.length ? points[i + 2] : p2;

      for (let t = 0; t <= 1; t += 0.1) {
        const x = catmullRom(p0.x, p1.x, p2.x, p3.x, t);
        const y = catmullRom(p0.y, p1.y, p2.y, p3.y, t);
        ctx.lineTo(x, y);
      }
    }
  }

  function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number) {
    const v0 = (p2 - p0) * 0.5;
    const v1 = (p3 - p1) * 0.5;
    const t2 = t * t;
    const t3 = t2 * t;
    return (
      (2 * p1 - 2 * p2 + v0 + v1) * t3 +
      (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 +
      v0 * t +
      p1
    );
  }

  const drawGame = (interpolation: number) => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, boardSize, boardSize);

        // Рисуем еду
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(food.x + cellSize / 2, food.y + cellSize / 2, cellSize / 2, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = 'rgb(235,101,81)';
        ctx.beginPath();
        ctx.arc(food.x + cellSize / 2, food.y + cellSize / 2, cellSize / 2, 0, 2 * Math.PI);
        ctx.fill();

        // Интерполируем позиции змеи
        const interpolatedSnake = snake.map((segment, index) => {
          const prevSegment = prevSnakePositions[index] || segment;
          return {
            x: prevSegment.x + (segment.x - prevSegment.x) * interpolation,
            y: prevSegment.y + (segment.y - prevSegment.y) * interpolation,
          };
        });
      
        // Рисуем тело змеи с использованием Catmull-Rom сплайнов
        if (interpolatedSnake.length > 1) {
          const points = interpolatedSnake.map(segment => ({
            x: segment.x + cellSize / 2,
            y: segment.y + cellSize / 2,
          }));
        
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
        
          // Внешняя обводка
          ctx.strokeStyle = 'black';
          ctx.lineWidth = cellSize + 2;
          ctx.beginPath();
          drawCatmullRomCurve(ctx, points);
          ctx.stroke();
        
          // Внутренний цвет тела змеи
          ctx.strokeStyle = 'rgb(246,198,118)';
          ctx.lineWidth = cellSize;
          ctx.beginPath();
          drawCatmullRomCurve(ctx, points);
          ctx.stroke();
        } else if (interpolatedSnake.length === 1) {
          // Если длина змеи 1, рисуем круг
          ctx.fillStyle = 'rgb(246,198,118)';
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(
            interpolatedSnake[0].x + cellSize / 2,
            interpolatedSnake[0].y + cellSize / 2,
            cellSize / 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.stroke();
        }
      
        // Рисуем глаза и зрачки
        const head = interpolatedSnake[0];
        const eyeOffset = cellSize / 3;
        const eyeVerticalOffset = cellSize / 3; // Вертикальное смещение глаз
        const eyeRadius = 12;
        const pupilRadius = eyeRadius / 2;
      
        // Корректировка направления для плавного поворота
        const currentDirection = interpolation < 0.5 ? prevDirection : direction;
      
        // Координаты глаз
        let leftEyeX, leftEyeY, rightEyeX, rightEyeY;
      
        switch (currentDirection) {
          case 'UP':
            leftEyeX = head.x + cellSize / 2 - eyeOffset;
            rightEyeX = head.x + cellSize / 2 + eyeOffset;
            leftEyeY = rightEyeY = head.y + cellSize / 2 + eyeVerticalOffset;
            break;
          case 'DOWN':
            leftEyeX = head.x + cellSize / 2 - eyeOffset;
            rightEyeX = head.x + cellSize / 2 + eyeOffset;
            leftEyeY = rightEyeY = head.y + cellSize / 2 - eyeVerticalOffset;
            break;
          case 'LEFT':
            leftEyeX = rightEyeX = head.x + cellSize / 2 + eyeVerticalOffset;
            leftEyeY = head.y + cellSize / 2 - eyeOffset;
            rightEyeY = head.y + cellSize / 2 + eyeOffset;
            break;
          case 'RIGHT':
            leftEyeX = rightEyeX = head.x + cellSize / 2 - eyeVerticalOffset;
            leftEyeY = head.y + cellSize / 2 - eyeOffset;
            rightEyeY = head.y + cellSize / 2 + eyeOffset;
            break;
          default:
            leftEyeX = rightEyeX = head.x + cellSize / 2;
            leftEyeY = rightEyeY = head.y + cellSize / 2 - eyeVerticalOffset;
            break;
        }
      
        // Рисуем левый глаз
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(leftEyeX, leftEyeY, eyeRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      
        // Рисуем правый глаз
        ctx.beginPath();
        ctx.arc(rightEyeX, rightEyeY, eyeRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      
        // Смещение для зрачков
        let dx = 0,
          dy = 0;
        switch (currentDirection) {
          case 'UP':
            dy = -pupilRadius / 2;
            break;
          case 'DOWN':
            dy = pupilRadius / 2;
            break;
          case 'LEFT':
            dx = -pupilRadius / 2;
            break;
          case 'RIGHT':
            dx = pupilRadius / 2;
            break;
          default:
            break;
        }
      
        // Координаты зрачков
        const leftPupilX = leftEyeX + dx;
        const leftPupilY = leftEyeY + dy;
        const rightPupilX = rightEyeX + dx;
        const rightPupilY = rightEyeY + dy;
      
        // Рисуем левый зрачок
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(leftPupilX, leftPupilY, pupilRadius, 0, 2 * Math.PI);
        ctx.fill();
      
        // Рисуем правый зрачок
        ctx.beginPath();
        ctx.arc(rightPupilX, rightPupilY, pupilRadius, 0, 2 * Math.PI);
        ctx.fill();
      
        // Рисуем улыбку (рот) после глаз
        if (smileImage) {
          const smileSize = cellSize / 2;
          const centerX = head.x + cellSize / 2;
          const centerY = head.y + cellSize / 2;
        
          ctx.save();
          ctx.translate(centerX, centerY);
        
          switch (currentDirection) {
            case 'UP':
              ctx.rotate(-Math.PI / 2);
              break;
            case 'DOWN':
              ctx.rotate(Math.PI / 2);
              break;
            case 'LEFT':
              ctx.rotate(Math.PI);
              break;
            case 'RIGHT':
              ctx.rotate(0);
              break;
            default:
              break;
          }
        
          ctx.drawImage(smileImage, 6, -smileSize / 1.5, smileSize * 1.3, smileSize * 1.3);
          ctx.restore();
        }
      }
    }
  };

  useEffect(() => {
    let animationFrameId: number;

    const gameLoop = (currentTime: number) => {
      if (gameOver) return;

      const deltaTime = currentTime - lastMoveTime;
      const interpolation = Math.min(deltaTime / gameSpeed, 1);

      if (deltaTime >= gameSpeed) {
        moveSnake();
        setLastMoveTime(currentTime);
      }

      drawGame(interpolation);

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [snake, direction, gameOver, smileImage]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  return (
    <ContainerPage logo={false}>
      <Flex
        h='100%'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Score score={score} />
        <canvas ref={canvasRef} width={boardSize} height={boardSize} className="board" />
        {gameOver && (
          <GameOverModal
            message={"Игра окончена"}
            score={score}
            onRestart={() => window.location.reload()}
          />
        )}
      </Flex>
    </ContainerPage>
  );
};

export default SnakeGame
