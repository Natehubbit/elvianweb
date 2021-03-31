import { db } from "../config/firebase";

const CakesRef = db.collection("cakes");

export default class ProductService {
  static async getCakes() {
    try {
      const res = await CakesRef.get();
      return res.docs.map((d) => ({ ...d.data(), id: d.id }));
    } catch (e) {
      console.log(e.message);
      return null;
    }
  }
}
