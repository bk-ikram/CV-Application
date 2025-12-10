import {TrashIcon, LeftChevronIcon, RightChevronIcon, PlusIcon} from './Icons.jsx';

function EntryNavigation({numEntries = 1, currentIndex = 0, handleSectionMgmt}){
    const lastIndex = numEntries - 1;
    return (
        <div className='entryMgmt'>
            <span className='leftIcons'>
                <button onClick={handleSectionMgmt} className='This should delete'>
                    <TrashIcon/>
                </button>
            </span>
            <span className='rightIcons'>
                {currentIndex > 0 
                && <button onClick={handleSectionMgmt}><LeftChevronIcon/></button>}
                {((currentIndex < lastIndex ) || (numEntries === 0))
                    ?  <button onClick={handleSectionMgmt}><RightChevronIcon/></button>
                    :  <button onClick={handleSectionMgmt}><PlusIcon/></button>
                }
            </span>
        </div>
    )
}

export default EntryNavigation;