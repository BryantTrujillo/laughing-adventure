import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Contact Us',
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ['campsites@nucamp.co'],
      subject: 'Inquiry',
      body: 'To whom it may concern: ',
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card title='Contact Information' wrapperStyle={{ margin: 20 }}>
            <View>
              <Text>1 Nucamp Way</Text>
              <Text>Seattle, WA 98001</Text>
              <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
              <Text>Phone: 1-206-555-1234</Text>
              <Text>Email: campsites@nucamp.co</Text>
              <Button
                title='Send Email'
                buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                icon={
                  <Icon
                    name='envelope-o'
                    type='font-awesome'
                    color='#FFF'
                    iconStyle={{ margin: 10 }}
                  />
                }
                onPress={() => this.sendMail()}
              />
            </View>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
