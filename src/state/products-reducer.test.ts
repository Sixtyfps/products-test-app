import {productsReducer, ProductsStateType, setSearchValueAC} from "./products-reducer";

test('should left only the product with name we got', () => {
    const startState: ProductsStateType = {
        "products": [
            {
                "id": 1,
                "name": "Apple",
                "price": 1.10,
                "currency": "EUR",
                "category": "Fruits",
                "description": "Fresh and delicious apples from the local orchard."
            },
            {
                "id": 2,
                "name": "Banana",
                "price": 0.65,
                "currency": "EUR",
                "category": "Fruits",
                "description": "Ripe and sweet bananas, perfect for a healthy snack."
            }
        ],
        searchValue:''
    }

    const action = setSearchValueAC('Mango')
    const endState = productsReducer(startState, action)

    expect(endState.searchValue).toBe('Mango')
})

