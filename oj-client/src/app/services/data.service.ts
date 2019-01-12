import { Injectable } from '@angular/core';
import { PROBLEMS } from 'app/mock-problem';
import { Problem } from 'app/models/problem.model';


@Injectable()
export class DataService {

  constructor() { }

  getProblems(): Problem[]{
    return PROBLEMS;
  }

  getProblem(id: number): Problem {
    return PROBLEMS.find((problem) => problem.id === id);
  } 
}
