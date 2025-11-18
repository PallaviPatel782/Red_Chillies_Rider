import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import KeyboardAvoidWrapper from '../../Components/KeyboardAvoidWrapper';
import Header from '../../Components/Header';
import GlobalStyles from '../../utils/GlobalStyles/GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SF, SH, SW } from '../../utils/Responsiveness/Dimensions';
import Colors from '../../utils/Colors/Colors';
import styles from './styles'

const ChatScreen = () => {
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello! Your order is on the way 🚀', sender: 'captain', time: '10:15 AM' },
        { id: '2', text: 'Okay great, please don’t ring the bell', sender: 'user', time: '10:16 AM' },
        { id: '3', text: 'Sure! I’ll call when I arrive.', sender: 'captain', time: '10:17 AM' },
    ]);

    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim().length === 0) return;
        const newMsg = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, newMsg]);
        setInput('');
    };

    return (
        <KeyboardAvoidWrapper>
            <View style={[GlobalStyles.container]}>
                <Header title="Chat with Customer" />
                <View style={styles.warningBox}>
                    <Image source={require('../../assests/Images/chat.png')} style={styles.warningIcon} />
                    <Text style={styles.warningText}>
                        Do not share any personal details with captain over call or chat
                    </Text>
                </View>
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                styles.messageBubble,
                                item.sender === 'user' ? styles.userBubble : styles.captainBubble,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.messageText,
                                    item.sender === 'user' ? styles.userText : styles.captainText,
                                ]}
                            >
                                {item.text}
                            </Text>
                            <Text style={styles.messageTime}>{item.time}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: SH(80) }}
                />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={80}
                >
                    <View style={styles.inputBar}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your message..."
                            placeholderTextColor="#888"
                            value={input}
                            onChangeText={setInput}
                        />
                        <TouchableOpacity onPress={sendMessage}>
                            <Ionicons name="send-outline" size={SF(22)} color={Colors.red} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </KeyboardAvoidWrapper>
    );
};

export default ChatScreen;
