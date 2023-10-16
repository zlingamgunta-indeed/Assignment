function findAccountById(accounts, id) {
  return accounts.find( account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort(({ name: { last: firstAccountLast } }, {name: { last: secondAccountLast }}) => firstAccountLast.toLowerCase() < secondAccountLast.toLowerCase() ? -1 : 1);
}

function getAccountFullNames(accounts) {
  return accounts.map( ( { name: { first, last } } ) => `${first} ${last}` );
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
