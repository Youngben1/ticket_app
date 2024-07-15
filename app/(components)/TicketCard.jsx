import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = ({ ticket }) => {
  return (
    <div className='flex flex-col p-3 m-2 rounded-md bg-card hover:bg-card-hover shadow-lg '>
        <div className='flex mb-3'>
        <PriorityDisplay priority={ticket.priority} />
        <div className='ml-auto'>
        <DeleteBlock />
        </div>
        </div>
        <h4>TICKET TITLE</h4>
        <hr className='h-px border-0 bg-page mb-2' />
        <p className='whitespace-pre-wrap'>This is the ticket description. Kindly attend to this ticket</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
            <div className='flex flex-col'>
                <p className='text-xs my-1'>4/5/24 20:51</p>
                <ProgressDisplay />
            </div>
            <div className='flex items-end ml-auto'>
                <StatusDisplay />
            </div>
        </div>
    </div>
  )
}

export default TicketCard