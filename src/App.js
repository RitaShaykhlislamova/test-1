import './App.css';
// eslint-disable-next-line no-unused-vars
import Test from "./Test";
import User from "./User";



const App = () => {

      const users = [
          {
              firstName: "John",
              secondName: "Doe",
              age: 30,
              phone: "555-555-5555",
              email: "john.doe@example.com",
              imageURL: "https://example.com/john.jpg",
              gender: "male"
          },
          {
              firstName: "Jane",
              secondName: "Doe",
              age: 25,
              phone: "555-555-5556",
              email: "jane.doe@example.com",
              imageURL: "https://example.com/jane.jpg",
              gender: "female"
          },
          {
              firstName: "Bob",
              secondName: "Smith",
              age: 40,
              phone: "555-555-5557",
              email: "bob.smith@example.com",
              imageURL: "https://example.com/bob.jpg",
              gender: "male"
          },
          {
              firstName: "Alice",
              secondName: "Jones",
              age: 35,
              phone: "555-555-5558",
              email: "alice.jones@example.com",
              imageURL: "https://example.com/alice.jpg",
              gender: "female"
          },
          {
              firstName: "Tom",
              secondName: "Brown",
              age: 28,
              phone: "555-555-5559",
              email: "tom.brown@example.com",
              imageURL: "https://example.com/tom.jpg",
              gender: "male"
          },
          {
              firstName: "Mary",
              secondName: "Green",
              age: 42,
              phone: "555-555-5560",
              email: "mary.green@example.com",
              imageURL: "https://example.com/mary.jpg",
              gender: "female"
          },
          {
              firstName: "David",
              secondName: "Taylor",
              age: 31,
              phone: "555-555-5561",
              email: "david.taylor@example.com",
              imageURL: "https://example.com/david.jpg",
              gender: "male"
          },
          {
              firstName: "Karen",
              secondName: "Miller",
              age: 27,
              phone: "555-555-5562",
              email: "karen.miller@example.com",
              imageURL: "https://example.com/karen.jpg",
              gender: "female"
          },
          {
              firstName: "Peter",
              secondName: "Lee",
              age: 39,
              phone: "555-555-5563",
              email: "peter.lee@example.com",
              imageURL: "https://example.com/peter.jpg",
              gender: "male"
          },
          {
              firstName: "Sara",
              secondName: "Clark",
              age: 29,
              phone: "555-555-5564",
              email: "sara.clark@example.com",
              imageURL: "https://example.com/sara.jpg",
              gender: "female"
          }
      ];

      return (

        <div className={'main'}>
            {
                users.map(user => <User key={user.phone} {...user}/> )
            }

        </div>

  );
}

export default App;
