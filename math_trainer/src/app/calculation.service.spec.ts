import { CalculationService } from "./calculation.service";

describe("CalculationService", () => {

  it('should generate 10 exercises on default', () => {
    const service = new CalculationService();
    expect(service.allExercises().length).toBe(10);
  });

  it('should generate 12 exercises when changed',()=> {
    const service = new CalculationService();
    service.questions = 12;
    expect(service.allExercises().length).toBe(12);
  });

  it('should only generate +',()=> {
    const service = new CalculationService();
    service.plus = true;
    service.minus = false;
    service.multi = false;
    service.divide = false;
    expect(service.allExercises().every(e => e.operator === '+')).toBe(true);
  });
});
