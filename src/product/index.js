import { useParams } from "react-router-dom";

function ProductPage() {
    const {id} = useParams();

    const params = useParams();
    console.log(params);


    return <h1>상품 {id}</h1>;
}

export default ProductPage;