import React from 'react';
import { Button, Text, View, TouchableOpacity, Modal } from 'react-native';

const TermsAndConditions = ({ modalVisible, setModalVisible }) => (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{color: 'blue'}}>Terms and Conditions.</Text>
            <Text style={{color: 'blue'}}>You have to fill all the details before heading to the next section.</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Text style={{ marginLeft: 8 }}>Terms and Conditions</Text>
    </TouchableOpacity>
  );

export default TermsAndConditions