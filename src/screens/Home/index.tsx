import { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from '../../../assets/logo.png';
import IconPlus from '../../../assets/plus.png';
import IconClipboard from '../../../assets/clipboard.png';
import { Task } from "../../components/Task";
import { styles } from "./styles";


interface Task {
    description: string;
    done: boolean;
}

export function Home() {
    const [taskDescription, setTaskDescription] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [update, setUpdate] = useState(false);


    function handleAddTask() {

        const duplicateDescription = tasks.find(task => task.description === taskDescription);

        if (duplicateDescription) {
            return;
        }

        const newTask: Task = {
            description: taskDescription,
            done: false,
        }
        setTasks(prevState => [...prevState, newTask]);
        setTaskDescription('');
    }

    function handleChecked(task: Task) {
        task.done = !task.done;
        setUpdate(!update);
    }

    function countTasksComplete() {
        const tasksComplete = tasks.filter((task) => task.done)
        return tasksComplete.length;
    }

    function handleDeleteTask(taskDeleted: Task) {
        const updateTasks = tasks.filter(task => task.description !== taskDeleted.description);
        setTasks(updateTasks);
        // setUpdate(!update)
    }

    useEffect(() => { }, [update])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={text => setTaskDescription(text)}
                    value={taskDescription}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Image source={IconPlus} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerTaskInfo}>
                <View style={styles.taskInfo}>
                    <Text style={styles.labelTaskNumberCreate}>
                        Criadas
                    </Text>
                    <View style={styles.taskContainerNumberInfo}>
                        <Text style={styles.taskNumberInfo}>
                            {tasks.length}
                        </Text>
                    </View>
                </View>
                <View style={styles.taskInfo}>
                    <Text style={styles.labelTaskNumberDone}>
                        Concluídas
                    </Text>
                    <View style={styles.taskContainerNumberInfo}>
                        <Text style={styles.taskNumberInfo}>
                            {countTasksComplete()}
                        </Text>
                    </View>
                </View>
            </View>
            <FlatList
                style={styles.taskList}
                data={tasks}
                keyExtractor={(item: Task) => item.description}
                renderItem={({ item }) => (
                    <Task
                        key={item.description}
                        description={item.description}
                        done={item.done}
                        onDone={() => handleChecked(item)}
                        onDelete={() => handleDeleteTask(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.containerEmpty}>
                        <Image source={IconClipboard} />
                        <Text style={styles.textEmpty}>
                            Você ainda não tem tarefas cadastradas
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}