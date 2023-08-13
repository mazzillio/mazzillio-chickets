/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { HttpExceptions } from '../../interfaces/HttpExceptions';

export function errorMiddleware(
	err: HttpExceptions,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const status: number = err.status ?? 500;
	const message: string = err.message ?? 'Internal server error';
	res.status(status).json({
		message,
		status,
	});
}
