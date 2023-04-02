# React

- [https://reactjs.org/](https://reactjs.org/)
- React là một thư viện Javascript để xây dựng giao diện người dùng.
- React hỗ trợ xây dựng trang web theo hướng single page application (SPA) [https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering](https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering)
- VSCode extensions:
  ◦ [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  ◦ [https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx)
- Browser extensions:
  ◦ [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## 1. Create-react-app

- [https://create-react-app.dev/](https://create-react-app.dev/)
- Cài đặt: npx create-react-app project-name
- CRA cung cấp bộ công cụ khởi tạo ứng dụng React, vì vậy bạn có thể đi vào xây dựng ứng dụng của mình mà không cần phải xử lý các cấu hình Webpack và Babel.

## 2. Component

- Components giúp phân chia những đoạn code của UI (giao diện người dùng) thành các phần độc lập để dễ dàng quản lý và tái sử dụng.
- Về cơ bản, component cũng giống một javascript function return về những phần tử React mô tả những gì sẽ xuất hiện trên giao diện.
- Luôn luôn bắt đầu component name với chữ cái in hoa React sẽ coi những component bắt đầu với chữ cái in thường là DOM tags. Ví dụ, `<div />` đại diện cho 1 thẻ div HTML, nhưng `<Welcome />` đại diện cho 1 component
- Có 2 loại component

```jsx
// Function component
function App() {
	return (
		<div>Hello World!!!<div>
	)
}
```

```jsx
// Class component
class App extends React.Component {
	render() {
		return (
			<div>Hello World!!!<div>
		)
	}
}
```

- Snippets để tạo nhanh component:
- Function component: `rfce`
- Class component: `rcc`

## 3. JSX

- JSX = Javascript + XML
- React sử dụng JSX để biểu thị UI components
- JSX cho phép viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức như createElement() hoặc appendChild().
- Cú pháp JSX

```jsx
const title = "BC42 - React";
const jsx = (
  <section className="app">
    <h1>{title}</h1>
  </section>
);
```

- Code JSX nếu được viết bằng Javascript thuần

```jsx
const title = "BC42 - React";
const jsx = React.createElement(
  "section",
  { className: "app" },
  React.createElement("h1", null, title)
);
```

- Vì JSX gần với JavaScript hơn là so với HTML, React sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML.

```jsx
/* className thay cho class */
<h1 className="title">Hello World!!!<div>

/* htmlFor thay cho for */
<label htmlFor="username">Username</label>
<input type="text" id="username" />
```

## 4. Data binding

- Dấu ngoặc nhọn {} cho phép bạn viết các biểu thức JavaScript bên trong JSX

```jsx
const user = { name: "Alice", imgUrl: "..." };
return (
  <div>
    <h1>{user.name}</h1>
    <img className="avatar" src={user.imageUrl} />
  </div>
);
```

## 5. Conditional rendering

- Bạn có thể sử dụng if else để hiển thị nội dung khác nhau dựa trên điều kiện

```jsx
const isLoggedIn = true;
let content;
if (isLoggedIn) {
  content = <button>Logout</button>;
} else {
  content = <button>Login</button>;
}
return <div>{content}</div>;
```

- Bạn có thể sử dụng toán tử 3 ngôi để hiển thị nội dung bên trong JSX

```jsx
const isLoggedIn = true;
return (
  <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
);
```

- Nếu chỉ muốn hiển thị nội dung khi điều kiện đúng, bạn có thể sử dụng toán tử &&

```jsx
const isLoggedIn = true;
return <div>{isLoggedIn && <button>Logout</button>}</div>;
```

## 6. List rendering

- Với JSX, bạn có thể sử dụng toán tử map để render một mảng dữ liệu thành một mảng các phần tử

```jsx
const users = [
  { id: 1, name: "Alice", imgUrl: "..." },
  { id: 2, name: "Bob", imgUrl: "..." },
  { id: 3, name: "Charlie", imgUrl: "..." },
];
return (
  <div>
    {users.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl} />
      </div>
    ))}
  </div>
);
```

## 7. Event

- Các sự kiện trong React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange
- Với JSX, truyền một hàm làm trình xử lý sự kiện, thay vì một chuỗi.
- Không gọi hàm xử lý sự kiện, ta chỉ đưa hàm vào trong onClick và React sẽ tự gọi đến hàm đó khi user click vào button

```jsx
// html
<button onclick="handleClick()">
  Clicker
</button>

// jsx
<button onClick={handleClick}>
  Clicker
</button>
```

- Tất cả sự kiện đều nhận được một đối số là event, nó là một đối tượng có các thuộc tính và phương thức giúp xử lý sự kiện. Quan trọng nhất là event.target là một tham chiếu đến phần tử DOM mà sự kiện được gọi.

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

return <input onChange={handleChange} />;
```

- Để truyền tham số vào cho các hàm xử lý sự kiện, ta có thể sử dụng arrow function

```jsx
const showMessage = (message) => {
  alert(message);
};

return <button onClick={() => showMessage("Hello BC42")}>Show Message</button>;
```

- Tổng hợp những sự kiện được hỗ trợ trong react: https://reactjs.org/docs/events.html

## 8. Style

- Inline style: Với React, inline style không được thể hiện bằng một string mà bằng một object. Các thuộc tính CSS được đặt tên bằng camelCase

```jsx
<h1 style={{ backgroundColor: "red", color: "white" }}>Hello</h1>
```

- CSS: Import trực tiếp file css vào Component, tuy nhiên dù bạn chỉ import ở 1 component nhưng css được import sẽ được áp dụng lên toàn bộ ứng dụng.

```jsx
import "./styles.css";
```

- CSS module:
  - CSS Module là một phương pháp để tạo ra các class với phạm vi cục bộ, giúp tránh xung đột và tăng tính tổ chức của mã CSS.
  - Với CSS Module, các class được tạo ra chỉ có tác dụng trong phạm vi của component mà chúng được sử dụng.
  - Khi sử dụng CSS Module, các class được đặt tên tự động và duy nhất, để tránh xung đột với các lớp CSS khác trong ứng dụng của bạn.

```jsx
import styles from "./styles.module.css";

<h1 className={styles.title}>Hello</h1>;
```

## 9. State

- Một số nội dung trên màn hình sẽ cập nhật theo tương tác của người dùng. Ví dụ như khi người dùng click vào button "Show" sẽ hiển thị nội dung ẩn, khi click vào button "Buy" sẽ đưa sản phẩm vào giỏ hàng,...Component cần lưu trữ trạng thái của nó để biết được nội dung hiển thị là gì, sản phẩm nào đã được thêm vào giỏ hàng. Trong React dữ liệu để lưu trữ trạng thái của component được gọi là State.

# Khai báo một biến bình thường trong component là không đủ

- Component trên dưới thị một giá trị count, nhấn vào nút Increment sẽ hiển thị giá trị mới của count bằng cách tăng lên một đơn vị. Tuy nhiên có 2 điều ngăn không cho điều này hoạt động:
  - Các biến cục bộ không được chia sẻ giữa các lần render, nghĩa là mỗi lần render, biến count sẽ được khởi tạo lại về giá trị 0.
  - Các thay đổi đối với biến cục bộ sẽ không kích hoạt render, nghĩa là khi nhấn vào nút Increment, giá trị của count sẽ được tăng lên một đơn vị nhưng không có gì thay đổi trên giao diện.

```jsx
function Counter() {
  let count = 0;
  const handleIncrement = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

- Để cập nhật một component với dữ liệu mới, hai điều cần phải xảy ra:

  - Dữ liệu được giữ lại giữa các lần render.
  - Kích hoạt để component được render lại với dữ liệu mới (re-rendering)

- `useState` là một React Hook cung cấp cho chúng ta hai điều trên:

  - Một biến trạng thái (state) để giữ lại dữ liệu giữa các lần render.
  - Một hàm setter để cập nhật giá trị của state và kích hoạt render lại component.

- useState nhận vào một tham số là giá trị khởi tạo của state, và trả về một mảng gồm 2 phần tử: giá trị của state và hàm setter để cập nhật giá trị của state. Cú pháp [count, setCount] được gọi là array destructuring, cho phép đọc giá trị của mảng theo thứ tự.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```
