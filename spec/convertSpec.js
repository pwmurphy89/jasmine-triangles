describe ("Triangle Type: ", function (){

	describe ("when the sum of the lengths of any two sides do NOT exceed the length of third side ", function(){
		it("is not a valid triangle", function(){
			expect(findTypeOfTriangle(1,4,2)).toEqual("invalid triangle");
		});
	});
	describe ("when all three sides have the same length", function(){
		it("is Equilateral", function(){
			expect(findTypeOfTriangle(2,2,2)).toEqual("Equilateral");
		});
	});
	describe ("when two sides are the same length", function(){
		it("is Isosceles", function(){
			expect(findTypeOfTriangle(1,2,2)).toEqual("Isosceles");
		});
	});
	describe ("when all three sides are of different lengths", function(){
		it("is Scalene", function(){
			expect(findTypeOfTriangle(5,2,6)).toEqual("Scalene");
		});
	});
});

