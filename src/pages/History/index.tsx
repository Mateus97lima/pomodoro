import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templades/MainTemplate';


import styles from './styles.module.css'
import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatadDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
 




 export function History() {
const {state} = useTaskContext();

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton 
              icon={<TrashIcon />} 
              color="red" 
              aria-label="Apagar History" 
              title="Apagar History" 
            />
          </span>
        </Heading>
      </Container>
  
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.tasKs.map(task => {
                return (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.duration}</td>
                  <td>{formatDate(task.startDate)}</td>
                  <td>{getTaskStatus(task,state.activeTask)}</td>
                  <td>{task.type}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
 }  