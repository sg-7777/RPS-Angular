import { PlayerDTO } from './player-dto';

export class MatchDTO{
    player1: PlayerDTO;
    player2: PlayerDTO;
    winner: string;
}