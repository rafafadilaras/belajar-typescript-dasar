import { type Seller } from '../src/seller';

describe('Interface', function() {
    it('Should support in typescript', function() {

        const seller: Seller = {
            id: 1,
            name: "Toko Rafa",
            nib: "1234567890",
            npwp: "0987654321"
        }

        seller.name = "Toko Rafi";

        console.info(seller);

    });

    it('should support function interface', function() {

        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2, 2)).toBe(4);

    });
});