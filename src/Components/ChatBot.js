"use client"
import { useState, useEffect, useRef } from 'react';
import styles from './ChatBot.module.css';

// Keyword-based responses
// Keyword-based responses
const responses = {
  // 'motor': 'Senator Lambi, you do not have money. Please hustle first. No buy car now',
  // 'invest': 'Good idea, Senator Lambi. Wise investments can grow your wealth.',
  // 'spend': 'Be cautious, Senator Lambi. Excessive spending can lead to financial troubles.',
  // 'choosen': 'Shut up!',
  'hello': 'Hello! How can I assist you with your car search today?',
  'hi': 'Hi there! What kind of car are you looking for?',
  'hey': 'Hey! How can I help you find your perfect car?',
  'greetings': 'Greetings! What can I do for you in your car search?',
  'howdy': 'Howdy! Are you ready to find your dream car?',
  'car': 'We have a wide range of cars available. Are you interested in a specific brand or type of car?',
  'vehicle': 'Our vehicle selection is extensive. What type of vehicle are you looking for?',
  'automobile': 'We have many automobiles to choose from. Do you have any particular style in mind?',
  'sedan': 'Sedans are a popular choice. We have models like the Toyota Camry starting at $25,000, or the Honda Accord from $27,000. Are you interested in any specific features?',
  'suv': 'SUVs are great for families and adventure. We have the Honda CR-V starting at $28,000, or the Toyota RAV4 from $27,000. What size SUV are you considering?',
  'truck': 'Looking for a truck? We have options from the Ford F-150 starting at $30,000 to the Chevrolet Silverado from $32,000. What will you be using it for?',
  'van': 'Vans are versatile vehicles. The Honda Odyssey starts at $33,000, while the Chrysler Pacifica begins at $35,000. Are you looking for a family van or a work van?',
  'coupe': 'Coupes are stylish and sporty. The BMW 4 Series starts at $46,000, while the Audi A5 begins at $45,000. Are you interested in any particular brand of coupe?',
  'convertible': 'Convertibles are perfect for enjoying the open road. The Mazda MX-5 Miata starts at $27,000, while the Ford Mustang convertible begins at $33,000. Do you have any preferences?',
  'hatchback': 'Hatchbacks offer great versatility. The Volkswagen Golf starts at $24,000, while the Mazda3 hatchback begins at $23,000. Are you looking for a specific size or brand?',
  'sports car': 'Sports cars are exciting! We have the Porsche 911 starting at $100,000, or the Chevrolet Corvette from $60,000. What is your dream sports car?',
  'electric car': 'Interested in electric cars? The Tesla Model 3 starts at $40,000, while the Nissan Leaf begins at $28,000. Are you looking for any particular range or features?',
  'hybrid': 'Hybrid vehicles offer great fuel economy. The Toyota Prius starts at $25,000, while the Honda Insight begins at $23,000. Do you have any specific brand preferences?',
  'price': 'Our car prices range from $10,000 for used economy cars to over $100,000 for luxury vehicles. What is your budget?',
  'cost': 'The cost of our vehicles varies widely. Can you give me an idea of your budget?',
  'expensive': 'We have vehicles at various price points. Our luxury cars like the BMW 7 Series start around $87,000. What do you consider expensive?',
  'cheap': 'We have more affordable options available. The Nissan Versa starts at $15,000 new. What price range are you comfortable with?',
  'affordable': 'We have many affordable vehicles. The Hyundai Elantra starts at $20,000. What is your ideal price range?',
  'budget': 'Let us find a car that fits your budget. The Kia Rio starts at $17,000. What price range are you looking at?',
  'financing': 'We offer various financing options. Would you like to know more about our finance plans?',
  'loan': 'We can help you secure a car loan. Would you like to speak with our finance team?',
  'lease': 'Leasing is an option for many of our vehicles. Are you interested in learning more about our lease offers?',
  'down payment': 'Down payment requirements vary. How much are you planning to put down?',
  'interest rate': 'Interest rates depend on various factors. Would you like to discuss current rates with our finance team?',
  'brand': 'We offer popular brands like Toyota, Honda, Ford, BMW, and many more. Do you have any specific brand in mind?',
  'make': 'We carry a wide range of makes. Do you have a preferred car manufacturer?',
  'toyota': 'Toyota offers reliable and efficient vehicles. The Corolla starts at $20,000, while the Highlander SUV begins at $36,000. Are you interested in a specific Toyota model?',
  'honda': 'Honda is known for quality and value. The Civic starts at $22,000, and the Pilot SUV begins at $38,000. Which Honda model catches your eye?',
  'ford': 'Ford has a diverse lineup from cars to trucks. The Escape SUV starts at $27,000, while the Explorer begins at $34,000. What type of Ford vehicle are you considering?',
  'chevrolet': 'Chevrolet offers a wide range of vehicles. The Malibu sedan starts at $23,000, while the Equinox SUV begins at $26,000. Are you looking for a Chevrolet car, truck, or SUV?',
  'bmw': 'BMW is known for luxury and performance. The 3 Series starts at $42,000, while the X5 SUV begins at $60,000. Which BMW series are you interested in?',
  'audi': 'Audi offers premium vehicles with advanced technology. The A4 sedan starts at $40,000, while the Q5 SUV begins at $45,000. Is there any particular Audi model you are curious about?',
  'mercedes': 'Mercedes-Benz is synonymous with luxury. The C-Class starts at $42,000, while the GLE SUV begins at $57,000. Which class of Mercedes interests you?',
  'volkswagen': 'Volkswagen offers reliable and stylish vehicles. The Jetta starts at $19,000, while the Tiguan SUV begins at $26,000. Which VW model are you considering?',
  'hyundai': 'Hyundai provides great value and warranty. The Sonata starts at $24,000, while the Santa Fe SUV begins at $28,000. Are you interested in a specific Hyundai model?',
  'kia': 'Kia offers a range of affordable and well-equipped vehicles. The Forte starts at $18,000, while the Telluride SUV begins at $33,000. Is there any Kia model you are particularly interested in?',
  'nissan': 'Nissan has a diverse lineup of vehicles. The Altima starts at $25,000, while the Rogue SUV begins at $27,000. Which Nissan model appeals to you?',
  'mazda': 'Mazda is known for sporty handling and stylish design. The Mazda6 starts at $25,000, while the CX-5 SUV begins at $26,000. Which Mazda are you considering?',
  'subaru': 'Subaru is famous for its all-wheel drive vehicles. The Impreza starts at $19,000, while the Outback begins at $28,000. Are you interested in a specific Subaru model?',
  'lexus': 'Lexus offers luxury vehicles with reliability. The IS sedan starts at $40,000, while the RX SUV begins at $46,000. Which Lexus series interests you?',
  'acura': 'Acura provides luxury vehicles with advanced technology. The TLX sedan starts at $38,000, while the RDX SUV begins at $40,000. Is there any particular Acura model you are curious about?',
  'infiniti': 'Infiniti offers premium vehicles with distinctive design. The Q50 sedan starts at $37,000, while the QX50 SUV begins at $39,000. Which Infiniti model catches your eye?',
  'test drive': 'Certainly! We offer test drives for all our vehicles. Would you like to schedule one?',
  'drive': 'Would you like to take a car for a spin? We can arrange a test drive for you.',
  'try': 'Trying out a car before buying is important. When would you like to schedule a test drive?',
  'used car': 'We have a great selection of used cars. They all go through a thorough inspection process. Are you looking for any particular model?',
  'pre-owned': 'Our pre-owned vehicles offer great value. Any specific make or model you are interested in?',
  'second-hand': 'Second-hand cars can be a great option. What type of used vehicle are you looking for?',
  'certified pre-owned': 'Certified pre-owned vehicles offer additional peace of mind. Would you like to know more about our CPO program?',
  'new car': 'Our new car inventory is constantly updated. Are there any specific features you are looking for in a new car?',
  'brand new': 'Brand new cars come with full warranty and the latest features. What kind of new car interests you?',
  'latest model': 'We have the latest models available. Which new release are you excited about?',
  'current year': 'This year models are in stock. Is there any particular brand or model you want to see?',
  'help': 'I am here to help! Whether you need information about our cars, pricing, or services, just ask!',
  'assist': 'How can I assist you today? I am here to answer any questions about our vehicles and services.',
  'support': 'I am here to support you in your car buying journey. What can I help you with?',
  'information': 'I would be happy to provide you with information. What would you like to know about our cars or services?',
  'advice': 'I can offer advice on choosing the right car. What factors are most important to you?',
  'guidance': 'I am here to provide guidance in your car search. What aspects of car buying do you need help with?',
  'warranty': 'We offer various warranty options. Would you like to know more about our warranty coverage?',
  'guarantee': 'Our vehicles come with guarantees for your peace of mind. Are you interested in learning more about our guarantees?',
  'insurance': 'We can assist with insurance options. Would you like information about insuring your new vehicle?',
  'registration': 'We can help with vehicle registration. Do you need information about the registration process?',
  'service': 'We offer comprehensive service packages. Would you like details about our service options?',
  'maintenance': 'Regular maintenance is important. Can I tell you about our maintenance packages?',
  'repair': 'Our service center can handle all types of repairs. Do you need information about our repair services?',
  'parts': 'We stock a wide range of car parts. Are you looking for any specific parts?',
  'accessories': 'We offer various accessories to customize your vehicle. Are there any particular accessories you are interested in?',
  'color': 'Our vehicles come in a variety of colors. Do you have a preferred color for your car?',
  'fuel efficiency': 'Fuel efficiency is important. Are you looking for a particularly fuel-efficient vehicle?',
  'mpg': 'MPG ratings vary across our models. What kind of fuel economy are you aiming for?',
  'safety': 'Safety is a top priority. Are there any specific safety features you are looking for in a vehicle?',
  'features': 'Our vehicles come with various features. Are there any particular features you consider must-haves?',
  'technology': 'We have cars with the latest technology. Are there any specific tech features you are interested in?',
  'infotainment': 'Our vehicles offer various infotainment options. What kind of system are you looking for?',
  'audio': 'We have vehicles with premium audio systems. Is a high-quality sound system important to you?',
  'navigation': 'Many of our vehicles come with built-in navigation. Is this a feature you are interested in?',
  'bluetooth': 'Bluetooth connectivity is standard in many of our models. Is this an important feature for you?',
  'apple carplay': 'Many of our vehicles support Apple CarPlay. Is this something you are looking for?',
  'android auto': 'Android Auto is available in several of our models. Is this a feature you need?',
  'performance': 'If you are looking for performance, we have several high-performance models. What level of performance are you seeking?',
  'horsepower': 'Our vehicles offer a range of horsepower options. How much power are you looking for?',
  'transmission': 'We have both automatic and manual transmission options. Do you have a preference?',
  'awd': 'All-wheel drive is available in many of our models. Is AWD something you are interested in?',
  '4wd': 'We have several 4-wheel drive options. Are you looking for a 4WD vehicle?',
  'towing': 'If you need towing capacity, we have several options. How much towing power do you need?',
  'cargo': 'Cargo space varies across our models. How much cargo capacity are you looking for?',
  'family': 'We have many family-friendly options. How many passengers do you typically need to accommodate?',
  'compare': 'I would be happy to help you compare different models. Which vehicles would you like to compare?',
  'review': 'Customer reviews can be helpful. Would you like to know about the reviews for any specific models?',
  'rating': 'Our vehicles have various ratings. Are you interested in learning about the ratings for any particular models?',
  'trade-in': 'We accept trade-ins. Would you like information about our trade-in process?',
  'sell': 'Are you looking to sell your current vehicle? We can discuss our vehicle purchasing options.',
  'inventory': 'Our inventory is regularly updated. Are you looking for something specific that you do not see listed?',
  'availability': 'Vehicle availability can vary. Is there a specific model you are wondering about?',
  'order': 'If we do not have what you are looking for in stock, we can often place a special order. Would you like more information about ordering?',
  'delivery': 'We offer delivery options for purchased vehicles. Would you like to know more about our delivery service?',
  'test': 'We encourage test drives to ensure you are comfortable with the vehicle. When would you like to schedule a test drive?',
  'visit': 'We would love to have you visit our dealership. Would you like directions or information about our business hours?',
  'location': 'Our dealership is conveniently located. Do you need our address or directions?',
  'hours': 'Our business hours are designed to accommodate various schedules. Would you like to know our hours of operation?',
  'appointment': 'We can schedule an appointment for you to view specific vehicles. Would you like to set up an appointment?',
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    // Simulating user login - replace with actual login logic
    setUser({ name: "" });

    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hello! How can I assist you with your car search today?", user: false }]);
    }
  }, [isOpen, messages.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsTyping(true);
    try {
      const response = await getBotResponse(input);
      setTimeout(() => {
        const supportMessage = { text: response, user: false };
        setMessages((prevMessages) => [...prevMessages, supportMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Simulate typing delay
    } catch (error) {
      console.error('Error:', error);
      setTimeout(() => {
        const errorMessage = { text: "I apologize, but I encountered an error. Please try asking your question again.", user: false };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };


  const getBotResponse = async (input) => {
    const lowercaseInput = input.toLowerCase();
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowercaseInput.includes(keyword)) {
        return response;
      }
    }

    
    // If no keyword match, use OpenAI API
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from OpenAI');
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw error;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const clearChats = () => {
    setMessages([]);
  };

  return (
    <div className={styles.chatbotContainer}>
      {!isOpen && (
        <button className={styles.chatIcon} onClick={() => setIsOpen(true)} aria-label="Open chat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.chatIconSvg}>
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h4v3a1 1 0 001.707.707L15.414 16H20a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>AutoVista Support</h3>
            {user && <span className={styles.userInfo}>Welcome, {user.name}</span>}
            <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close chat">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.closeIcon}>
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.message} ${message.user ? styles.userMessage : styles.supportMessage}`}>
                {message.text}
              </div>
            ))}
            {isTyping && <div className={styles.typingIndicator}>Support is typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className={styles.chatInput}
              aria-label="Chat input"
            />
            <button type="submit" className={styles.sendButton} aria-label="Send message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.sendIcon}>
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </form>
          <button onClick={clearChats} className={styles.clearButton}>Clear Chat</button>
        </div>
      )}
    </div>
  );
}