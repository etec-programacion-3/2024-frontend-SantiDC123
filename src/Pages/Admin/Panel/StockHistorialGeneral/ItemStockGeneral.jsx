import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);

export const ItemStockGeneral = ({ tituloProd, fecha, stockPrevio, stockModificado, descripcion }) => {
    return (
        <article className="producto-panel">
            <p className="titulo-prod"> {tituloProd} </p>
            <p>{dayjs(fecha).utc().format('DD/MM/YYYY HH:mm')}</p>
            <p>{stockPrevio}</p>
            <p> {stockModificado} </p>
            <p> {descripcion} </p>
        </article>
    )
}
