import { FlatList, View } from 'react-native';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import { TaskCard } from '../components/TaskCard';
import { TaskInput } from '../components/TaskInput';
import { TasksInfo } from '../components/TasksInfo';
import { styles } from './styles';
import { EmptyList } from '../components/EmptyList';

export type Task = {
  title: string;
  completedAt: string | null;
};

export function Home() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddNewTask(task: Task) {
    setTasks((prev) => [task, ...prev]);
    setInputValue('');
  }

  function handleCompletedTask(task: Task) {
    setTasks((prev) => {
      const taskToChangeIndex = prev.findIndex(
        (current) => current.title === task.title
      );

      const taskToChange = prev[taskToChangeIndex];
      taskToChange.completedAt = task.completedAt
        ? null
        : new Date().toISOString();
      return [...prev];
    });
  }

  function handleRemoveTask(task: Task) {
    setTasks((prev) => prev.filter((p) => p.title !== task.title));
  }

  return (
    <Layout>
      <TaskInput
        inputValue={inputValue}
        onChangeInputValue={setInputValue}
        onAddNewTask={handleAddNewTask}
      />

      <TasksInfo tasks={tasks} />

      <View style={styles.cards}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskCard
              key={item.title}
              task={item}
              onChangeTask={handleCompletedTask}
              onRemoveTask={handleRemoveTask}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </Layout>
  );
}
