import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 8,
    },

    checkBox: {
        padding: 3,
        marginRight: 8,
    },

    taskText: {
        flex: 1,
        flexGrow: 1,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#F2F2F2',
    },
    taskTextDone: {
        flex: 1,
        flexGrow: 1,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#808080',
        textDecorationLine: 'line-through'
    },
    trashIcon: {
        padding: 9,
    },
})