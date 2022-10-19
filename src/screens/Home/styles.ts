import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    header: {
        width: '100%',
        height: 173,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        marginTop: '-10%',
    },
    input: {
        flex: 1,
        padding: 16,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#F2F2F2',
        fontSize: 16,
        lineHeight: 22,
        marginRight: 8
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F',
        padding: 18,
        borderRadius: 6
    },
    containerTaskInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        paddingBottom: 20,
        marginBottom: 20,
    },

    taskInfo: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    labelTaskNumberCreate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EA8DE',
    },

    labelTaskNumberDone: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8284FA'
    },

    taskNumberInfo: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D9D9D9',
        lineHeight: 15

    },

    taskContainerNumberInfo: {
        color: '#D9D9D9',
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: '#333333',
        marginLeft: 8,
        borderRadius: 999
    },
    taskList: {
        paddingHorizontal: 24,
    },
    containerEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
    },
    textEmpty: {
        fontSize: 14,
        color: '#808080',
        textAlign: 'center',
        marginTop: 16,
    }

});
