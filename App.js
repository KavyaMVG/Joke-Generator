import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import FlatButton from "./FlatButton";

export default function App() {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    const joke = async () => {
      try {
        const response = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        setJokes(response.data.joke);
      } catch (err) {
        console.log(err);
      }
    };
    joke();
  }, []);

  const handleGetJokes = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJokes(response.data.joke);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "dodgerblue",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Text style={styles.title}>Jokes Generator</Text>
        <Text style={styles.joke}>{jokes}</Text>
        <FlatButton text="Get Joke" onPress={handleGetJokes}></FlatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 30,
  },
  joke: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
