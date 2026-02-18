import { useEffect, useRef, useState } from 'react';

function UseRef() {
    const [name, setName] = useState('');
    const prevName = useRef('');
    
    useEffect(() => {
        prevName.current = name;
    });

    return ( 
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>My Name is {name} and previous Name is {prevName.current}</div>
        </>
     );
}

export default UseRef;