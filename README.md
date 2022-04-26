## CutCut
- Route
> npm i react-router-dom

- Router Error
```Uncaught Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app. ```
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
);```
 
원래 <BrowserRouter>로 전체를 감쌌는데 그걸 지웠다
