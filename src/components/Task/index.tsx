import { Image, Text, TouchableOpacity, View } from "react-native";
import Check from '../../../assets/check.png';
import Checked from '../../../assets/checked.png';
import TrashIcon from '../../../assets/trash.png';
import { styles } from "./styles";

interface TaskProps {
    description: string,
    done: boolean,
    onDone: () => void;
    onDelete: () => void;
}

export function Task({ description, done, onDone, onDelete }: TaskProps) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkBox} onPress={onDone}>
                <Image source={done ? Checked : Check} />
            </TouchableOpacity>
            <Text style={done ? styles.taskTextDone : styles.taskText}>
                {description}
            </Text>
            <TouchableOpacity style={styles.trashIcon} onPress={onDelete}>
                <Image source={TrashIcon} />
            </TouchableOpacity>
        </View>
    )
}