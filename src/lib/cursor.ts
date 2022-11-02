export default function loadCursor(ball: HTMLDivElement) {
	let x = window.innerWidth / 2;
	let y = window.innerHeight / 2;

	let ballX = x;
	let ballY = y;

	let hideTimeout: NodeJS.Timeout | null = null;

	const drawBall = () => {
		ballX += (x - ballX) * 0.1 - 1;
		ballY += (y - ballY) * 0.1 - 1;

		ball.style.top = `${ballY - window.scrollY}px`;
		ball.style.left = `${ballX}px`;
	};

	const loop = () => {
		drawBall();
		requestAnimationFrame(loop);
	};

	const touch = (event: TouchEvent) => {
		x = event.touches[0].pageX;
		y = event.touches[0].pageY;
	};

	const mouseMove = (event: MouseEvent) => {
		ball.style.opacity = "1";

		if (hideTimeout) {
			clearTimeout(hideTimeout);
		}

		x = event.pageX;
		y = event.pageY;

		hideTimeout = setTimeout(() => {
			ball.style.opacity = "0";
		}, 1e3);
	};

	const mouseDown = () => {
		ball.style.transform = "scale(2)";
	};

	const mouseUp = () => {
		ball.style.transform = "scale(1)";
	};

	loop();

	window.addEventListener("touchstart", touch);
	window.addEventListener("touchmove", touch);
	window.addEventListener("mousemove", mouseMove);
	window.addEventListener("mousedown", mouseDown);
	window.addEventListener("mouseup", mouseUp);

	return () => {
		window.removeEventListener("touchstart", touch);
		window.removeEventListener("touchmove", touch);
		window.removeEventListener("mousemove", mouseMove);
		window.removeEventListener("mousedown", mouseDown);
		window.removeEventListener("mouseup", mouseUp);
	};
}
