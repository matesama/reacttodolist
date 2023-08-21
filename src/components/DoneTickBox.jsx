const DoneTickBox = () => {

    const handleCheckBox = (e) => {
        const listItem = e.target.parentNode;
        e.target.classList.toggle("checked") ? 
        listItem.style.textDecoration = "line-through":
        listItem.style.textDecoration = "none";
    }




    return <input type="checkBox" className="doneTickBox" onClick={handleCheckBox} />;
}

export default DoneTickBox;