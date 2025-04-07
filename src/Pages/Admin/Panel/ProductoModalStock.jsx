import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);

export const ProductoModalStock = ({ fecha, stockPrevio, stockModificado, descripcion }) => {
    return (
        <article className="producto-panel">
            <p>{dayjs(fecha).utc().format('DD/MM/YYYY HH:mm')}</p>
            <p>{stockPrevio}</p>
            <p> {stockModificado} </p>
            <p> {descripcion} </p>
        </article>
    )
}
