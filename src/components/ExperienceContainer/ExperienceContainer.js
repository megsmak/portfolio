import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ job }) => (
  <div className='experience__container'>

    <h3 className='experience__name'>{job.name} <span className='experience__location'>({job.location})</span></h3>
    <p className='experience__date'>{job.start} - {job.end}</p>
    <p className='experience__description'>{job.description}</p>

  </div>
)

export default ExperienceContainer
