const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    }
    throw new Error('Invalid type');
};



const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    throw new Error('Invalid type');
};


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



interface RatedItem {
    title: string;
    rating: number;
}

const filterByRating = (items: RatedItem[]): RatedItem[] => {
    return items.filter(item => item.rating >= 4);
};


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    return users.filter((user: User) => user.isActive === true);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
}
 
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};


function getUniqueValues(values1: (number | string)[], values2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];

    // Function to check if a value is already in result array
    function isInArray(arr: (number | string)[], value: number | string): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return true;
            }
        }
        return false;
    }

    // Add from first array
    for (let i = 0; i < values1.length; i++) {
        const value = values1[i];
        if (value !== undefined && !isInArray(result, value)) {
            result[result.length] = value;
        }
    }

    // Add from second array
    for (let i = 0; i < values2.length; i++) {
        const value = values2[i];
        if (value !== undefined && !isInArray(result, value)) {
            result[result.length] = value;
        }
    }

    return result;
}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const baseTotal = product.price * product.quantity;
      const finalTotal =
        product.discount !== undefined
          ? baseTotal * (1 - product.discount / 100)
          : baseTotal;
      return finalTotal;
    })
    .reduce((sum, value) => sum + value, 0);
}

