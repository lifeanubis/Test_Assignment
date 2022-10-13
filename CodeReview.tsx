// Review following code snippet and answer questions:
// 1) What’s wrong with this code snippet?
// export interface Book {
//     id: string;
//     name: string;
//     }
//     export const BooksList: FC<{ books: Book[] }> = ({ books }) => {
//     return (
//     <ul>
//     { books.map((book, i) => <li key={i}>{book.name}</li>}) }
//     </ul>
//     )
//     }
// 2) How can we improve it?

// Answer:-
export interface Book {
  id: string;
  name: string;
}

export const BooksList: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.map((book, i) => {
        return <li key={i}>{book.name}</li>;
      })}
    </ul>
  );
};

// 3) Are there any cases when this code can be used with no modification?
//  Answer:- NO
