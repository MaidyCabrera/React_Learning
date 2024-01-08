import { memo } from "react";
export const Small = memo(({value}) => {
    console.log('Memo memoriza la función, y solo se renderiza si value que es la prop se modifica. Si se renderiza algo desde el componente donde estoy usando Small, Small no se renderiza, como el boton Show/Hide');
    return (
        <>
        <small>{value}</small>
        </>
    );
});