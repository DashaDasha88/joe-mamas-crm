import { useState } from 'react';

const TicketPage = () => {

    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
    })

    const editMode = false;

    const handleSubmit = () => {
        console.log('submitted')
    }

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label>Title</label>
                        <input id="title" name="title" type="text" onChange={handleChange} value={FormData.title} />
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage;