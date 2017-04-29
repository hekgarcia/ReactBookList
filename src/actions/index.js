export function selectBook(book) {
    
    console.log('A book has been selected: ' + book.title);
    
    //selectBook is an ActionCreator, it needs to return an action,
    // an object with type and property.
    return {
            type: 'BOOK_SELECTED',
            payload: book
        };
    
}