// Cspell:disable
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DismissKeyboardView from "./components/DimissKeyboard/DimissKeyboard";
import { useState } from "react";
/* const changeTaskState = (id) => {
  const findTask = data.findIndex((task) => task.id === id);
  if (findTask) {
    data[findTask].completed = !data[findTask].completed;
  }
}; */
const TaskList = ({ item }) => (
  <View style={tw`border border-red-200`}>
    <View style={tw`flex justify-between flex-row items-center my-1 p-2`}>
      <Text style={tw`text-xl text-md`}> ✨ {item.title}</Text>
      <Pressable>
        <FontAwesome
          name={item.completed ? "check-circle" : "times-circle"}
          size={32}
          color={item.completed ? "green" : "red"}
        />
      </Pressable>
    </View>
  </View>
);

export default function App() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    setTask((prev) =>
      prev.length
        ? [...prev, { title, completed: false, id: prev.length + 1 }]
        : [{ title, completed: false, id: prev.length + 1 }]
    );
    setTitle("");
  };
  return (
    <DismissKeyboardView>
      <View style={tw`w-full px-7 pt-20 `}>
        <Text style={tw`text-2xl text-gray-600 text-center`}>TODO App ✨</Text>
        <View
          style={tw`border-red-400 flex justify-center items-center w-full mt-5`}
        >
          <View style={tw`w-full flex justify-between items-center`}>
            <View style={tw`w-full`}>
              <TextInput
                style={tw`w-full border border-gray text-gray-400 p-3 rounded-md`}
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <Pressable
              style={tw`w-full bg-blue-400 m-2 p-2 rounded-md`}
              onPress={addTask}
            >
              <Text style={tw`text-white text-center text-xl`}>Add Task</Text>
            </Pressable>
          </View>
        </View>
        <Text style={tw`text-3xl mt-3`}>Task List ✨</Text>

        <View style={tw`my-2`}>
          <FlatList
            alwaysBounceVertical={false}
            data={task}
            renderItem={TaskList}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </DismissKeyboardView>
  );
}
