export default function Pagination({page, total, onUp, onDown}) {
    return (
        <nav aria-label="Pagination" className='d-flex justify-content-center mb-4'>
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" onClick={onDown}>Previous</button>
                </li>
                <li className='page-item disabled'>
                    <button className='page-link'>{page} of {total}</button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={onUp}>Next</button>
                </li>
            </ul>
        </nav>
    )
}
