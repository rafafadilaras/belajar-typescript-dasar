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
});