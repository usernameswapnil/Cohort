export function ChildComponent(props){
     //component--> always in capital letters
    console.log("child component got re-render")
    return(
        <div>
            <button onClick={props.ButtonHandler}>{props.buttonName}</button>
        </div>
    )
}

// when i am clicking on "increment" the count variable should only get re-render but the ChildComponent is also re-rendering. You can check -> if u click on "Increment" button the Count gets increased by one but in the console, on clicking the "Increment" button we see the message "child component got re-render" that means the entire App component is re-rendering.

// To prevent re-rendering u can use React.memo--> wrap the ChildComponent inside React.memo.Yeh karne se component tabhi re-render hoga jab props change honge nahi toh re-render nahi hoga.

//but if u are sending a function as props then React.memo will not save you from re-rendering. In that case you have to use useCallback hook.