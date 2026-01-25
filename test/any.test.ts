describe('any', function() {
    it('should  support in typescript', function() {

        const person: any = {
            id: 1,
            name: "Rafa Fadil Aras",
            age: 21
        }

        person.age = 20;
        person.address = "Indonesia";

        console.info(person);

    });
});