## CutCut✂
- Route
> npm i react-router-dom

### Error  
- Router 
```Uncaught Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app. ```
solution
```ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
 
원래 <BrowserRouter>로 전체를 감쌌는데 그걸 지웠다

### 🖥️
![cutcut2](https://user-images.githubusercontent.com/97449025/166259044-b0eeab90-03ae-416c-8e78-39ab6a2982cd.png)

