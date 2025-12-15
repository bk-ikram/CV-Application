import {TrashIcon, LeftChevronIcon, RightChevronIcon, PlusIcon} from './Icons.jsx';

function EntryNavigation({numEntries = 1, currentIndex = 0, setEntryIndex, handleEntryMgmt}){
    const lastIndex = numEntries - 1;
    
    function handleClick(e){
        const action = e.currentTarget.getAttribute("action");
        switch(action) {
            case "add":
                handleEntryMgmt.add({});
                setEntryIndex(currentIndex + 1);
                break;
            case "delete":
                if(currentIndex === 0){
                    //if the first item is the only entry, add an empty entry first
                    numEntries === 1 && handleEntryMgmt.add();
                    handleEntryMgmt.delete(currentIndex);
                    setEntryIndex(currentIndex);
                }
                else{
                    handleEntryMgmt.delete(currentIndex);
                    setEntryIndex(currentIndex - 1);
                }
                break;
            case "next":
                setEntryIndex(currentIndex + 1);
                break;
            case "back":
                setEntryIndex(currentIndex - 1);
                break;
        }
    }    
    
    return (
        <div className='entryMgmt'>
            <span className='leftIcons'>
                <button action="delete" className = "delete" onClick={handleClick}>
                    <TrashIcon/>
                </button>
            </span>
            <span className='rightIcons'>
                {currentIndex > 0 
                && <button action="back" onClick={handleClick}><LeftChevronIcon/></button>}
                {((currentIndex < lastIndex ) && (numEntries > 1))
                    &&  <button action="next" onClick={handleClick}><RightChevronIcon/></button>
                }
                {currentIndex === lastIndex
                    &&  <button action="add" onClick={handleClick}><PlusIcon/></button>
                }
            </span>
        </div>
    )
}

export default EntryNavigation;