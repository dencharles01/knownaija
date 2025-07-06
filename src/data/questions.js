const questions = [
  {
    category: "History",
    difficulty: "Easy",
    question: "Who was the first President of Nigeria?",
    options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Tafawa Balewa", "Yakubu Gowon"],
    answer: "Nnamdi Azikiwe"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "In what year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1970"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which war occurred in Nigeria from 1967 to 1970?",
    options: ["Niger Delta Crisis", "Biafra War", "Yoruba-Hausa War", "Civil Unrest"],
    answer: "Biafra War"
  },

  {
    category: "History",
    difficulty: "Easy",
    question: "Who led the 1966 military coup in Nigeria?",
    options: ["Chukwuma Kaduna Nzeogwu", "Yakubu Gowon", "Aguiyi Ironsi", "Murtala Mohammed"],
    answer: "Chukwuma Kaduna Nzeogwu"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who was the Head of State during the Nigerian Civil War?",
    options: ["Aguiyi Ironsi", "Yakubu Gowon", "Olusegun Obasanjo", "Tafawa Balewa"],
    answer: "Yakubu Gowon"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "When did Nigeria become a republic?",
    options: ["1960", "1963", "1979", "1999"],
    answer: "1963"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who was the first military Head of State in Nigeria?",
    options: ["Aguiyi Ironsi", "Yakubu Gowon", "Tafawa Balewa", "Obasanjo"],
    answer: "Aguiyi Ironsi"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which Nigerian leader introduced the Structural Adjustment Programme?",
    options: ["Shagari", "Obasanjo", "Buhari", "Babangida"],
    answer: "Babangida"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which year was the Nigerian Second Republic established?",
    options: ["1979", "1983", "1999", "1963"],
    answer: "1979"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which Nigerian President died in office in 2010?",
    options: ["Goodluck Jonathan", "Yar'Adua", "Obasanjo", "Buhari"],
    answer: "Yar'Adua"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who handed over power to Shehu Shagari in 1979?",
    options: ["Gowon", "Obasanjo", "Abacha", "Ironsi"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which constitution returned Nigeria to civilian rule in 1999?",
    options: ["1979", "1989", "1993", "1999"],
    answer: "1999"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who annulled the June 12, 1993, elections?",
    options: ["Obasanjo", "Abacha", "Babangida", "Jonathan"],
    answer: "Babangida"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who was the first civilian president after military rule in 1999?",
    options: ["Obasanjo", "Buhari", "Jonathan", "Shagari"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "What year did Murtala Mohammed become Head of State?",
    options: ["1973", "1975", "1977", "1979"],
    answer: "1975"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who succeeded Murtala Mohammed after his assassination?",
    options: ["Obasanjo", "Gowon", "Babangida", "Shagari"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who was the only Nigerian to serve as both Head of State and President?",
    options: ["Babangida", "Obasanjo", "Buhari", "Shagari"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which Nigerian leader was overthrown in 1983?",
    options: ["Babangida", "Gowon", "Shagari", "Obasanjo"],
    answer: "Shagari"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "What year was the first general election held in Nigeria?",
    options: ["1959", "1960", "1963", "1965"],
    answer: "1959"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Which political party dominated Nigeria's First Republic?",
    options: ["AG", "NPC", "NCNC", "NNDP"],
    answer: "NPC"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What year did the Biafran War end?",
    options: ["1969", "1970", "1971", "1972"],
    answer: "1970"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Which military leader created 12 states in 1967?",
    options: ["Gowon", "Ironsi", "Obasanjo", "Abacha"],
    answer: "Gowon"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What year was Nigeria declared a federation?",
    options: ["1954", "1960", "1963", "1979"],
    answer: "1954"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Who was known as the 'Zik of Africa'?",
    options: ["Azikiwe", "Awolowo", "Balewa", "Enahoro"],
    answer: "Azikiwe"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Which Nigerian region declared secession in 1967?",
    options: ["Western", "Northern", "Eastern", "Mid-Western"],
    answer: "Eastern"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Who formed the Action Group party?",
    options: ["Awolowo", "Azikiwe", "Balewa", "Ahmadu Bello"],
    answer: "Awolowo"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What was the name of the 1985 coup leader?",
    options: ["Abacha", "Obasanjo", "Babangida", "Yar'Adua"],
    answer: "Babangida"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Who ruled Nigeria during the annulled June 12 election?",
    options: ["Babangida", "Abacha", "Jonathan", "Obasanjo"],
    answer: "Babangida"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "When did Buhari first become Head of State?",
    options: ["1982", "1984", "1986", "1988"],
    answer: "1984"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Who introduced UPE (Universal Primary Education)?",
    options: ["Obasanjo", "Shagari", "Gowon", "Azikiwe"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What year was Nigeria's current constitution enacted?",
    options: ["1979", "1989", "1993", "1999"],
    answer: "1999"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Which leader introduced Vision 2010?",
    options: ["Obasanjo", "Shagari", "Abacha", "Yar'Adua"],
    answer: "Abacha"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Who was the first female minister in Nigeria?",
    options: ["Ngozi Okonjo-Iweala", "Funmilayo Ransome-Kuti", "Margaret Ekpo", "Janet Akinrinade"],
    answer: "Janet Akinrinade"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What was the major political crisis of 1962?",
    options: ["Census", "Western Region crisis", "Military coup", "Election rigging"],
    answer: "Western Region crisis"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Who led Nigeria during the 2007 elections?",
    options: ["Buhari", "Obasanjo", "Jonathan", "Yar'Adua"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "Which leader introduced the GSM revolution?",
    options: ["Abacha", "Obasanjo", "Jonathan", "Buhari"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What year did Goodluck Jonathan become President?",
    options: ["2007", "2009", "2010", "2011"],
    answer: "2010"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Who was the President during Nigeria’s centenary?",
    options: ["Obasanjo", "Jonathan", "Buhari", "Yar'Adua"],
    answer: "Jonathan"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Which military Head of State introduced NYSC?",
    options: ["Babangida", "Obasanjo", "Gowon", "Abacha"],
    answer: "Gowon"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Who was the first Senate President of Nigeria?",
    options: ["David Mark", "Chuba Okadigbo", "Nnamdi Azikiwe", "Dennis Osadebay"],
    answer: "Dennis Osadebay"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Which northern leader was killed in the 1966 coup?",
    options: ["Ahmadu Bello", "Balewa", "Gowon", "Dan Fodio"],
    answer: "Ahmadu Bello"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "What year did Nigeria join the UN?",
    options: ["1955", "1960", "1963", "1965"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Which party won the 1999 general elections?",
    options: ["PDP", "ANPP", "AD", "SDP"],
    answer: "PDP"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Who was the first Nigerian Head of State to die in office?",
    options: ["Murtala Mohammed", "Yar\u2019Adua", "Ironsi", "Abacha"],
    answer: "Murtala Mohammed"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Who created the 36-state structure?",
    options: ["Abacha", "Gowon", "Babangida", "Obasanjo"],
    answer: "Abacha"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "What major event occurred in 1993?",
    options: ["Military coup", "Election annulment", "Democracy Day", "GSM launch"],
    answer: "Election annulment"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Which Head of State handed power to a civilian in 1979?",
    options: ["Obasanjo", "Babangida", "Gowon", "Abacha"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Who was president when Boko Haram insurgency escalated?",
    options: ["Jonathan", "Buhari", "Yar\u2019Adua", "Obasanjo"],
    answer: "Jonathan"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "When did Nigeria become a member of the African Union?",
    options: ["2001", "1999", "1963", "2000"],
    answer: "2001"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Which leader created the EFCC?",
    options: ["Jonathan", "Buhari", "Obasanjo", "Yar\u2019Adua"],
    answer: "Obasanjo"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "What did Lord Lugard do in 1914?",
    options: ["Built Lagos", "Founded Nigeria", "Amalgamated North and South", "Named Nigeria"],
    answer: "Amalgamated North and South"
  },

  {
    category: "History",
    difficulty: "Easy",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "Who was Nigeria’s first Prime Minister?",
    options: ["Tafawa Balewa", "Obasanjo", "Nnamdi Azikiwe", "Abacha"],
    answer: "Tafawa Balewa"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "In what year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1970"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Easy",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "In what year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1970"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "In what year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1970"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "In what year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1970"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Medium",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "What was the name of Nigeria's colonial master?",
    options: ["France", "Germany", "Britain", "Portugal"],
    answer: "Britain"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "In what year did Nigeria gain independence?",
    options: ["1957", "1960", "1963", "1970"],
    answer: "1960"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Who was Nigeria’s first Prime Minister?",
    options: ["Tafawa Balewa", "Obasanjo", "Nnamdi Azikiwe", "Abacha"],
    answer: "Tafawa Balewa"
  },
  {
    category: "History",
    difficulty: "Hard",
    question: "Which war occurred in Nigeria from 1967 to 1970?",
    options: ["Niger Delta Crisis", "Biafra War", "Yoruba-Hausa War", "Civil Unrest"],
    answer: "Biafra War"
  },




  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the primary reason for the Biafran secession in 1967?",
    "options": [
      "Economic disparity",
      "Religious conflict",
      "Military dictatorship",
      "Ethnic tensions"
    ],
    "answer": "Ethnic tensions"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who led the Nigerian side during the Nigerian Civil War?",
    "options": [
      "Yakubu Gowon",
      "Chukwuemeka Ojukwu",
      "Murtala Mohammed",
      "Olusegun Obasanjo"
    ],
    "answer": "Yakubu Gowon"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the name of the British amalgamation of Nigeria in 1914?",
    "options": [
      "Northern and Southern Protectorate Merger",
      "Royal Nigerian Treaty",
      "British-Nigeria Accord",
      "West African Charter"
    ],
    "answer": "Northern and Southern Protectorate Merger"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which Nigerian nationalist was executed by the British in 1947?",
    "options": [
      "Funmilayo Ransome-Kuti",
      "Herbert Macaulay",
      "Isaac Boro",
      "King Jaja of Opobo"
    ],
    "answer": "Isaac Boro"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What colonial policy did the British adopt in governing Nigeria?",
    "options": [
      "Indirect Rule",
      "Direct Rule",
      "Assimilation",
      "Paternalism"
    ],
    "answer": "Indirect Rule"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who was the first military Head of State after the 1966 coup?",
    "options": [
      "Aguiyi-Ironsi",
      "Yakubu Gowon",
      "Murtala Mohammed",
      "Olusegun Obasanjo"
    ],
    "answer": "Aguiyi-Ironsi"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which British official amalgamated Nigeria in 1914?",
    "options": [
      "Lord Lugard",
      "Harold Macmillan",
      "Hugh Clifford",
      "Frederick Guggisberg"
    ],
    "answer": "Lord Lugard"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the code name for the 1966 counter-coup in Nigeria?",
    "options": [
      "Operation Unity",
      "Operation Araba",
      "Operation Takeover",
      "Operation Restore"
    ],
    "answer": "Operation Araba"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the main goal of the Aba Women's Riot of 1929?",
    "options": [
      "Protest against taxation",
      "Demand for women's suffrage",
      "Labour rights",
      "Better education"
    ],
    "answer": "Protest against taxation"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "The 1945 general strike in Nigeria was led by which union?",
    "options": [
      "Nigeria Labour Congress",
      "Railway Workers Union",
      "Trades Union Congress",
      "United Africa Workers Union"
    ],
    "answer": "Railway Workers Union"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who founded the Sokoto Caliphate in 1804?",
    "options": [
      "Usman dan Fodio",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Benin Kingdom",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Usman dan Fodio"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year did Nigeria become a republic?",
    "options": [
      "Partitioning of Africa by Europeans",
      "Zazzau Emirate",
      "1963",
      "Moshood Abiola"
    ],
    "answer": "1963"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the significance of the Berlin Conference for Nigeria?",
    "options": [
      "Zazzau Emirate",
      "Partitioning of Africa by Europeans",
      "Moshood Abiola",
      "Ken Saro-Wiwa and the Ogoni Struggle"
    ],
    "answer": "Partitioning of Africa by Europeans"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which movement sought independence for the Niger Delta?",
    "options": [
      "Annulment by the military",
      "Partitioning of Africa by Europeans",
      "Niger Delta Volunteer Force",
      "Ken Saro-Wiwa and the Ogoni Struggle"
    ],
    "answer": "Niger Delta Volunteer Force"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the 1993 Nigerian presidential election known for?",
    "options": [
      "Partitioning of Africa by Europeans",
      "Annulment by the military",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Annulment by the military"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who declared himself President after the 1993 elections?",
    "options": [
      "Usman dan Fodio",
      "Benin Kingdom",
      "1897",
      "Moshood Abiola"
    ],
    "answer": "Moshood Abiola"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What major oil-related conflict happened in Ogoniland?",
    "options": [
      "Niger Delta Volunteer Force",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Zazzau Emirate",
      "Benin Kingdom"
    ],
    "answer": "Ken Saro-Wiwa and the Ogoni Struggle"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which empire did Queen Amina rule?",
    "options": [
      "Annulment by the military",
      "Zazzau Emirate",
      "Partitioning of Africa by Europeans",
      "Benin Kingdom"
    ],
    "answer": "Zazzau Emirate"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which was the last major kingdom to fall to British colonisation in Nigeria?",
    "options": [
      "Usman dan Fodio",
      "Partitioning of Africa by Europeans",
      "Benin Kingdom",
      "1897"
    ],
    "answer": "Benin Kingdom"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year was the Benin Kingdom conquered by the British?",
    "options": [
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Moshood Abiola",
      "1897",
      "Annulment by the military"
    ],
    "answer": "1897"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who founded the Sokoto Caliphate in 1804?",
    "options": [
      "Usman dan Fodio",
      "Benin Kingdom",
      "Annulment by the military",
      "Partitioning of Africa by Europeans"
    ],
    "answer": "Usman dan Fodio"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year did Nigeria become a republic?",
    "options": [
      "1963",
      "Moshood Abiola",
      "Annulment by the military",
      "1897"
    ],
    "answer": "1963"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the significance of the Berlin Conference for Nigeria?",
    "options": [
      "Zazzau Emirate",
      "Niger Delta Volunteer Force",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Partitioning of Africa by Europeans"
    ],
    "answer": "Partitioning of Africa by Europeans"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which movement sought independence for the Niger Delta?",
    "options": [
      "Usman dan Fodio",
      "Moshood Abiola",
      "1963",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Niger Delta Volunteer Force"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the 1993 Nigerian presidential election known for?",
    "options": [
      "Annulment by the military",
      "Moshood Abiola",
      "1897",
      "Zazzau Emirate"
    ],
    "answer": "Annulment by the military"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who declared himself President after the 1993 elections?",
    "options": [
      "Partitioning of Africa by Europeans",
      "Moshood Abiola",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Annulment by the military"
    ],
    "answer": "Moshood Abiola"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What major oil-related conflict happened in Ogoniland?",
    "options": [
      "Moshood Abiola",
      "Zazzau Emirate",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Partitioning of Africa by Europeans"
    ],
    "answer": "Ken Saro-Wiwa and the Ogoni Struggle"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which empire did Queen Amina rule?",
    "options": [
      "Usman dan Fodio",
      "Zazzau Emirate",
      "1897",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Zazzau Emirate"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which was the last major kingdom to fall to British colonisation in Nigeria?",
    "options": [
      "Benin Kingdom",
      "Partitioning of Africa by Europeans",
      "Niger Delta Volunteer Force",
      "Annulment by the military"
    ],
    "answer": "Benin Kingdom"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year was the Benin Kingdom conquered by the British?",
    "options": [
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "1963",
      "1897",
      "Niger Delta Volunteer Force"
    ],
    "answer": "1897"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who founded the Sokoto Caliphate in 1804?",
    "options": [
      "Usman dan Fodio",
      "Annulment by the military",
      "1963",
      "Zazzau Emirate"
    ],
    "answer": "Usman dan Fodio"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year did Nigeria become a republic?",
    "options": [
      "Partitioning of Africa by Europeans",
      "1963",
      "Zazzau Emirate",
      "Annulment by the military"
    ],
    "answer": "1963"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the significance of the Berlin Conference for Nigeria?",
    "options": [
      "Partitioning of Africa by Europeans",
      "1963",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Partitioning of Africa by Europeans"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which movement sought independence for the Niger Delta?",
    "options": [
      "Niger Delta Volunteer Force",
      "Annulment by the military",
      "Usman dan Fodio",
      "Partitioning of Africa by Europeans"
    ],
    "answer": "Niger Delta Volunteer Force"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the 1993 Nigerian presidential election known for?",
    "options": [
      "1963",
      "Partitioning of Africa by Europeans",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Annulment by the military"
    ],
    "answer": "Annulment by the military"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who declared himself President after the 1993 elections?",
    "options": [
      "Moshood Abiola",
      "Usman dan Fodio",
      "Partitioning of Africa by Europeans",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Moshood Abiola"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What major oil-related conflict happened in Ogoniland?",
    "options": [
      "Usman dan Fodio",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Annulment by the military",
      "1963"
    ],
    "answer": "Ken Saro-Wiwa and the Ogoni Struggle"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which empire did Queen Amina rule?",
    "options": [
      "Annulment by the military",
      "1963",
      "Zazzau Emirate",
      "Ken Saro-Wiwa and the Ogoni Struggle"
    ],
    "answer": "Zazzau Emirate"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which was the last major kingdom to fall to British colonisation in Nigeria?",
    "options": [
      "Usman dan Fodio",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Benin Kingdom",
      "Annulment by the military"
    ],
    "answer": "Benin Kingdom"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year was the Benin Kingdom conquered by the British?",
    "options": [
      "1897",
      "Annulment by the military",
      "Usman dan Fodio",
      "Partitioning of Africa by Europeans"
    ],
    "answer": "1897"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who founded the Sokoto Caliphate in 1804?",
    "options": [
      "Moshood Abiola",
      "Partitioning of Africa by Europeans",
      "Niger Delta Volunteer Force",
      "Usman dan Fodio"
    ],
    "answer": "Usman dan Fodio"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year did Nigeria become a republic?",
    "options": [
      "1963",
      "Partitioning of Africa by Europeans",
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Moshood Abiola"
    ],
    "answer": "1963"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the significance of the Berlin Conference for Nigeria?",
    "options": [
      "1963",
      "Zazzau Emirate",
      "Benin Kingdom",
      "Partitioning of Africa by Europeans"
    ],
    "answer": "Partitioning of Africa by Europeans"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which movement sought independence for the Niger Delta?",
    "options": [
      "Usman dan Fodio",
      "Niger Delta Volunteer Force",
      "Zazzau Emirate",
      "1897"
    ],
    "answer": "Niger Delta Volunteer Force"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What was the 1993 Nigerian presidential election known for?",
    "options": [
      "Niger Delta Volunteer Force",
      "Annulment by the military",
      "Partitioning of Africa by Europeans",
      "Moshood Abiola"
    ],
    "answer": "Annulment by the military"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Who declared himself President after the 1993 elections?",
    "options": [
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Benin Kingdom",
      "Moshood Abiola",
      "Niger Delta Volunteer Force"
    ],
    "answer": "Moshood Abiola"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What major oil-related conflict happened in Ogoniland?",
    "options": [
      "Ken Saro-Wiwa and the Ogoni Struggle",
      "Usman dan Fodio",
      "Niger Delta Volunteer Force",
      "1897"
    ],
    "answer": "Ken Saro-Wiwa and the Ogoni Struggle"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which empire did Queen Amina rule?",
    "options": [
      "Usman dan Fodio",
      "1963",
      "1897",
      "Zazzau Emirate"
    ],
    "answer": "Zazzau Emirate"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "Which was the last major kingdom to fall to British colonisation in Nigeria?",
    "options": [
      "1897",
      "Partitioning of Africa by Europeans",
      "Moshood Abiola",
      "Benin Kingdom"
    ],
    "answer": "Benin Kingdom"
  },
  {
    "category": "History",
    "difficulty": "Hard",
    "question": "What year was the Benin Kingdom conquered by the British?",
    "options": [
      "Usman dan Fodio",
      "Moshood Abiola",
      "Zazzau Emirate",
      "1897"
    ],
    "answer": "1897"
  },




  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When did Nigeria gain independence from Britain?",
    "options": [
      "MOSOP",
      "1991",
      "Chukwuma Kaduna Nzeogwu",
      "1960"
    ],
    "answer": "1960"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Who was the first President of Nigeria?",
    "options": [
      "University of Ibadan",
      "1991",
      "Olusegun Obasanjo",
      "Nnamdi Azikiwe"
    ],
    "answer": "Nnamdi Azikiwe"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian region was most affected by the Civil War?",
    "options": [
      "Lagos",
      "Niger Delta",
      "Hausa Empire",
      "Southeast"
    ],
    "answer": "Southeast"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which city served as the capital of Nigeria before Abuja?",
    "options": [
      "1966",
      "Lagos",
      "Olusegun Obasanjo",
      "Mid-Western Region"
    ],
    "answer": "Lagos"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What year did Abuja officially become the capital of Nigeria?",
    "options": [
      "Niger Delta",
      "Murtala Mohammed",
      "1991",
      "MOSOP"
    ],
    "answer": "1991"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian leader introduced the Structural Adjustment Programme?",
    "options": [
      "1983 coup",
      "Nnamdi Azikiwe",
      "Ibrahim Babangida",
      "University of Ibadan"
    ],
    "answer": "Ibrahim Babangida"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Who led the 1966 coup in Nigeria?",
    "options": [
      "1991",
      "Mid-Western Region",
      "Chukwuma Kaduna Nzeogwu",
      "University of Ibadan"
    ],
    "answer": "Chukwuma Kaduna Nzeogwu"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What is the name of Nigeria\u2019s longest-serving military ruler?",
    "options": [
      "Hausa-Fulani",
      "Chukwuma Kaduna Nzeogwu",
      "Yakubu Gowon",
      "MOSOP"
    ],
    "answer": "Yakubu Gowon"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which political party dominated the First Republic?",
    "options": [
      "Yakubu Gowon",
      "MOSOP",
      "Nnamdi Azikiwe",
      "NCNC"
    ],
    "answer": "NCNC"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When was the first military coup in Nigeria?",
    "options": [
      "Political violence",
      "1966",
      "1979",
      "Aguiyi-Ironsi"
    ],
    "answer": "1966"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What is the meaning of NADECO in Nigerian history?",
    "options": [
      "Southeast",
      "1966",
      "National Democratic Coalition",
      "Niger Delta"
    ],
    "answer": "National Democratic Coalition"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which ethnic group is predominant in Northern Nigeria?",
    "options": [
      "Olusegun Obasanjo",
      "1966",
      "Hausa-Fulani",
      "NCNC"
    ],
    "answer": "Hausa-Fulani"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What was Operation Wetie in Western Nigeria?",
    "options": [
      "1991",
      "Nnamdi Azikiwe",
      "Political violence",
      "1966"
    ],
    "answer": "Political violence"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Who was Nigeria\u2019s first military Head of State?",
    "options": [
      "Southeast",
      "Aguiyi-Ironsi",
      "NCNC",
      "Lagos"
    ],
    "answer": "Aguiyi-Ironsi"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which empire had Kano as its major city?",
    "options": [
      "Chukwuma Kaduna Nzeogwu",
      "Hausa Empire",
      "University of Ibadan",
      "Niger Delta"
    ],
    "answer": "Hausa Empire"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What was the name of the first Nigerian university?",
    "options": [
      "1966",
      "University of Ibadan",
      "NCNC",
      "Political violence"
    ],
    "answer": "University of Ibadan"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian state was created first after independence?",
    "options": [
      "Mid-Western Region",
      "1991",
      "1970",
      "Political violence"
    ],
    "answer": "Mid-Western Region"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When did the Nigerian Civil War end?",
    "options": [
      "Hausa Empire",
      "Olusegun Obasanjo",
      "Osun State",
      "1970"
    ],
    "answer": "1970"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which leader handed over power to Shehu Shagari in 1979?",
    "options": [
      "Olusegun Obasanjo",
      "Hausa Empire",
      "Nnamdi Azikiwe",
      "Chukwuma Kaduna Nzeogwu"
    ],
    "answer": "Olusegun Obasanjo"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which group was Ken Saro-Wiwa associated with?",
    "options": [
      "1979",
      "MOSOP",
      "Political violence",
      "1960"
    ],
    "answer": "MOSOP"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian region first discovered oil?",
    "options": [
      "Mid-Western Region",
      "1966",
      "Niger Delta",
      "Yakubu Gowon"
    ],
    "answer": "Niger Delta"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian leader established NYSC?",
    "options": [
      "Hausa-Fulani",
      "Yakubu Gowon",
      "1966",
      "Nnamdi Azikiwe"
    ],
    "answer": "Yakubu Gowon"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When was the Second Republic established?",
    "options": [
      "Chukwuma Kaduna Nzeogwu",
      "Hausa Empire",
      "Yakubu Gowon",
      "1979"
    ],
    "answer": "1979"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What event marked the end of the Second Republic?",
    "options": [
      "1983 coup",
      "Osun State",
      "Hausa-Fulani",
      "Yakubu Gowon"
    ],
    "answer": "1983 coup"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which state is historically known as the cradle of Yoruba civilization?",
    "options": [
      "Osun State",
      "University of Ibadan",
      "Lagos",
      "MOSOP"
    ],
    "answer": "Osun State"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian leader was assassinated during the 1976 coup?",
    "options": [
      "Osun State",
      "Chukwuma Kaduna Nzeogwu",
      "Murtala Mohammed",
      "Ibrahim Babangida"
    ],
    "answer": "Murtala Mohammed"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When did Nigeria gain independence from Britain?",
    "options": [
      "Political violence",
      "Southeast",
      "1960",
      "Olusegun Obasanjo"
    ],
    "answer": "1960"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Who was the first President of Nigeria?",
    "options": [
      "Nnamdi Azikiwe",
      "Lagos",
      "Southeast",
      "Yakubu Gowon"
    ],
    "answer": "Nnamdi Azikiwe"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian region was most affected by the Civil War?",
    "options": [
      "Nnamdi Azikiwe",
      "1966",
      "Southeast",
      "1983 coup"
    ],
    "answer": "Southeast"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which city served as the capital of Nigeria before Abuja?",
    "options": [
      "Yakubu Gowon",
      "Lagos",
      "Nnamdi Azikiwe",
      "Mid-Western Region"
    ],
    "answer": "Lagos"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What year did Abuja officially become the capital of Nigeria?",
    "options": [
      "Murtala Mohammed",
      "1991",
      "Political violence",
      "University of Ibadan"
    ],
    "answer": "1991"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian leader introduced the Structural Adjustment Programme?",
    "options": [
      "1960",
      "Nnamdi Azikiwe",
      "1991",
      "Ibrahim Babangida"
    ],
    "answer": "Ibrahim Babangida"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Who led the 1966 coup in Nigeria?",
    "options": [
      "Chukwuma Kaduna Nzeogwu",
      "Niger Delta",
      "University of Ibadan",
      "NCNC"
    ],
    "answer": "Chukwuma Kaduna Nzeogwu"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What is the name of Nigeria\u2019s longest-serving military ruler?",
    "options": [
      "1979",
      "Chukwuma Kaduna Nzeogwu",
      "Lagos",
      "Yakubu Gowon"
    ],
    "answer": "Yakubu Gowon"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which political party dominated the First Republic?",
    "options": [
      "Political violence",
      "Hausa Empire",
      "NCNC",
      "Nnamdi Azikiwe"
    ],
    "answer": "NCNC"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When was the first military coup in Nigeria?",
    "options": [
      "1991",
      "Nnamdi Azikiwe",
      "1966",
      "1979"
    ],
    "answer": "1966"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What is the meaning of NADECO in Nigerian history?",
    "options": [
      "University of Ibadan",
      "National Democratic Coalition",
      "Hausa Empire",
      "Osun State"
    ],
    "answer": "National Democratic Coalition"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which ethnic group is predominant in Northern Nigeria?",
    "options": [
      "1960",
      "Southeast",
      "Hausa-Fulani",
      "1966"
    ],
    "answer": "Hausa-Fulani"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What was Operation Wetie in Western Nigeria?",
    "options": [
      "University of Ibadan",
      "1979",
      "Ibrahim Babangida",
      "Political violence"
    ],
    "answer": "Political violence"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Who was Nigeria\u2019s first military Head of State?",
    "options": [
      "Hausa-Fulani",
      "Osun State",
      "Chukwuma Kaduna Nzeogwu",
      "Aguiyi-Ironsi"
    ],
    "answer": "Aguiyi-Ironsi"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which empire had Kano as its major city?",
    "options": [
      "Aguiyi-Ironsi",
      "Hausa Empire",
      "Osun State",
      "Political violence"
    ],
    "answer": "Hausa Empire"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What was the name of the first Nigerian university?",
    "options": [
      "Osun State",
      "University of Ibadan",
      "Lagos",
      "Yakubu Gowon"
    ],
    "answer": "University of Ibadan"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian state was created first after independence?",
    "options": [
      "1991",
      "Mid-Western Region",
      "Ibrahim Babangida",
      "Lagos"
    ],
    "answer": "Mid-Western Region"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When did the Nigerian Civil War end?",
    "options": [
      "1970",
      "National Democratic Coalition",
      "Yakubu Gowon",
      "Niger Delta"
    ],
    "answer": "1970"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which leader handed over power to Shehu Shagari in 1979?",
    "options": [
      "Olusegun Obasanjo",
      "1983 coup",
      "MOSOP",
      "Hausa-Fulani"
    ],
    "answer": "Olusegun Obasanjo"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which group was Ken Saro-Wiwa associated with?",
    "options": [
      "Mid-Western Region",
      "Niger Delta",
      "Nnamdi Azikiwe",
      "MOSOP"
    ],
    "answer": "MOSOP"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian region first discovered oil?",
    "options": [
      "National Democratic Coalition",
      "Ibrahim Babangida",
      "University of Ibadan",
      "Niger Delta"
    ],
    "answer": "Niger Delta"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "Which Nigerian leader established NYSC?",
    "options": [
      "Yakubu Gowon",
      "NCNC",
      "University of Ibadan",
      "1966"
    ],
    "answer": "Yakubu Gowon"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "When was the Second Republic established?",
    "options": [
      "1966",
      "1960",
      "1979",
      "NCNC"
    ],
    "answer": "1979"
  },
  {
    "category": "History",
    "difficulty": "Medium",
    "question": "What event marked the end of the Second Republic?",
    "options": [
      "Osun State",
      "Niger Delta",
      "Lagos",
      "1983 coup"
    ],
    "answer": "1983 coup"
  },


  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria\u2019s national flag colour?",
    "options": [
      "Rice",
      "Naira",
      "Green and White",
      "October 1st"
    ],
    "answer": "Green and White"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Who was the first Prime Minister of Nigeria?",
    "options": [
      "Abuja",
      "University of Ibadan",
      "Abdulsalami Abubakar",
      "Abubakar Tafawa Balewa"
    ],
    "answer": "Abubakar Tafawa Balewa"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "In which continent is Nigeria located?",
    "options": [
      "Africa",
      "Naira",
      "Benin",
      "Abubakar Tafawa Balewa"
    ],
    "answer": "Africa"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is Nigeria\u2019s most populous city?",
    "options": [
      "Lagos",
      "36",
      "Taiwo Akinkunmi",
      "Green and White"
    ],
    "answer": "Lagos"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What currency is used in Nigeria?",
    "options": [
      "Naira",
      "Taiwo Akinkunmi",
      "Atlantic Ocean",
      "October 1st"
    ],
    "answer": "Naira"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "How many states are in Nigeria?",
    "options": [
      "Arise, O Compatriots",
      "University of Ibadan",
      "Abubakar Tafawa Balewa",
      "36"
    ],
    "answer": "36"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the capital of Nigeria?",
    "options": [
      "Abubakar Tafawa Balewa",
      "Benin",
      "Abdulsalami Abubakar",
      "Abuja"
    ],
    "answer": "Abuja"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the official language of Nigeria?",
    "options": [
      "Eagle",
      "English",
      "Abuja",
      "Islam"
    ],
    "answer": "English"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of the Nigerian national anthem?",
    "options": [
      "Islam",
      "Arise, O Compatriots",
      "Africa",
      "Naira"
    ],
    "answer": "Arise, O Compatriots"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which ocean borders Nigeria to the south?",
    "options": [
      "Yoruba",
      "Lagos",
      "Atlantic Ocean",
      "Arise, O Compatriots"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which Nigerian tribe is famous for bronze sculptures?",
    "options": [
      "Unity and Faith, Peace and Progress",
      "Abuja",
      "Rice",
      "Benin"
    ],
    "answer": "Benin"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Who is known as the father of Nigerian nationalism?",
    "options": [
      "Naira",
      "River Niger",
      "Herbert Macaulay",
      "Eyo Festival"
    ],
    "answer": "Herbert Macaulay"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What year did Nigeria become a republic?",
    "options": [
      "Africa",
      "Eyo Festival",
      "1963",
      "Yoruba"
    ],
    "answer": "1963"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of the first Nigerian university?",
    "options": [
      "University of Ibadan",
      "English",
      "Islam",
      "October 1st"
    ],
    "answer": "University of Ibadan"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which river is the longest in Nigeria?",
    "options": [
      "Taiwo Akinkunmi",
      "Unity and Faith, Peace and Progress",
      "1963",
      "River Niger"
    ],
    "answer": "River Niger"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which popular festival is celebrated in Lagos?",
    "options": [
      "Britain",
      "Eyo Festival",
      "36",
      "Taiwo Akinkunmi"
    ],
    "answer": "Eyo Festival"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of the Nigerian coat of arms animal?",
    "options": [
      "Naira",
      "University of Ibadan",
      "Eyo Festival",
      "Eagle"
    ],
    "answer": "Eagle"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which ethnic group is largely found in the South-West?",
    "options": [
      "Atlantic Ocean",
      "Yoruba",
      "Abuja",
      "36"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What major religion is practiced in Northern Nigeria?",
    "options": [
      "Unity and Faith, Peace and Progress",
      "Lagos",
      "Eyo Festival",
      "Islam"
    ],
    "answer": "Islam"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is Nigeria\u2019s national motto?",
    "options": [
      "Taiwo Akinkunmi",
      "Unity and Faith, Peace and Progress",
      "Britain",
      "October 1st"
    ],
    "answer": "Unity and Faith, Peace and Progress"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Who designed the Nigerian flag?",
    "options": [
      "Abuja",
      "Britain",
      "Taiwo Akinkunmi",
      "Benin"
    ],
    "answer": "Taiwo Akinkunmi"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "When is Nigeria\u2019s Independence Day?",
    "options": [
      "1963",
      "Africa",
      "River Niger",
      "October 1st"
    ],
    "answer": "October 1st"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which country colonised Nigeria?",
    "options": [
      "Britain",
      "University of Ibadan",
      "Green and White",
      "Eyo Festival"
    ],
    "answer": "Britain"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the main staple food in Nigeria?",
    "options": [
      "Atlantic Ocean",
      "Herbert Macaulay",
      "Naira",
      "Rice"
    ],
    "answer": "Rice"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which Nigerian leader handed over to a civilian government in 1999?",
    "options": [
      "Abdulsalami Abubakar",
      "Eagle",
      "Benin",
      "University of Ibadan"
    ],
    "answer": "Abdulsalami Abubakar"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria\u2019s national flag colour?",
    "options": [
      "Green and White",
      "Naira",
      "Britain",
      "1963"
    ],
    "answer": "Green and White"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Who was the first Prime Minister of Nigeria?",
    "options": [
      "Africa",
      "Abubakar Tafawa Balewa",
      "36",
      "Arise, O Compatriots"
    ],
    "answer": "Abubakar Tafawa Balewa"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "In which continent is Nigeria located?",
    "options": [
      "Yoruba",
      "Africa",
      "Eagle",
      "Britain"
    ],
    "answer": "Africa"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is Nigeria\u2019s most populous city?",
    "options": [
      "River Niger",
      "Lagos",
      "Herbert Macaulay",
      "Abubakar Tafawa Balewa"
    ],
    "answer": "Lagos"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What currency is used in Nigeria?",
    "options": [
      "Naira",
      "Herbert Macaulay",
      "Africa",
      "Atlantic Ocean"
    ],
    "answer": "Naira"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "How many states are in Nigeria?",
    "options": [
      "Benin",
      "October 1st",
      "36",
      "Yoruba"
    ],
    "answer": "36"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the capital of Nigeria?",
    "options": [
      "Taiwo Akinkunmi",
      "Abuja",
      "University of Ibadan",
      "36"
    ],
    "answer": "Abuja"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the official language of Nigeria?",
    "options": [
      "October 1st",
      "English",
      "Abubakar Tafawa Balewa",
      "Taiwo Akinkunmi"
    ],
    "answer": "English"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of the Nigerian national anthem?",
    "options": [
      "English",
      "Benin",
      "Herbert Macaulay",
      "Arise, O Compatriots"
    ],
    "answer": "Arise, O Compatriots"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which ocean borders Nigeria to the south?",
    "options": [
      "Atlantic Ocean",
      "Eyo Festival",
      "Taiwo Akinkunmi",
      "Britain"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which Nigerian tribe is famous for bronze sculptures?",
    "options": [
      "Benin",
      "Unity and Faith, Peace and Progress",
      "Lagos",
      "Yoruba"
    ],
    "answer": "Benin"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Who is known as the father of Nigerian nationalism?",
    "options": [
      "Islam",
      "English",
      "Benin",
      "Herbert Macaulay"
    ],
    "answer": "Herbert Macaulay"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What year did Nigeria become a republic?",
    "options": [
      "Green and White",
      "Unity and Faith, Peace and Progress",
      "Arise, O Compatriots",
      "1963"
    ],
    "answer": "1963"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of the first Nigerian university?",
    "options": [
      "Green and White",
      "Naira",
      "University of Ibadan",
      "Islam"
    ],
    "answer": "University of Ibadan"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which river is the longest in Nigeria?",
    "options": [
      "1963",
      "River Niger",
      "Herbert Macaulay",
      "Yoruba"
    ],
    "answer": "River Niger"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which popular festival is celebrated in Lagos?",
    "options": [
      "Naira",
      "Islam",
      "Taiwo Akinkunmi",
      "Eyo Festival"
    ],
    "answer": "Eyo Festival"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the name of the Nigerian coat of arms animal?",
    "options": [
      "Eagle",
      "Benin",
      "Abuja",
      "36"
    ],
    "answer": "Eagle"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which ethnic group is largely found in the South-West?",
    "options": [
      "October 1st",
      "Yoruba",
      "Africa",
      "Benin"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What major religion is practiced in Northern Nigeria?",
    "options": [
      "Britain",
      "Islam",
      "Arise, O Compatriots",
      "Atlantic Ocean"
    ],
    "answer": "Islam"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is Nigeria\u2019s national motto?",
    "options": [
      "Eagle",
      "Abuja",
      "Unity and Faith, Peace and Progress",
      "Africa"
    ],
    "answer": "Unity and Faith, Peace and Progress"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Who designed the Nigerian flag?",
    "options": [
      "Unity and Faith, Peace and Progress",
      "1963",
      "Taiwo Akinkunmi",
      "Herbert Macaulay"
    ],
    "answer": "Taiwo Akinkunmi"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "When is Nigeria\u2019s Independence Day?",
    "options": [
      "36",
      "Yoruba",
      "October 1st",
      "University of Ibadan"
    ],
    "answer": "October 1st"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which country colonised Nigeria?",
    "options": [
      "Britain",
      "Abubakar Tafawa Balewa",
      "Lagos",
      "Unity and Faith, Peace and Progress"
    ],
    "answer": "Britain"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "What is the main staple food in Nigeria?",
    "options": [
      "Lagos",
      "1963",
      "Rice",
      "Naira"
    ],
    "answer": "Rice"
  },
  {
    "category": "History",
    "difficulty": "Easy",
    "question": "Which Nigerian leader handed over to a civilian government in 1999?",
    "options": [
      "River Niger",
      "1963",
      "October 1st",
      "Abdulsalami Abubakar"
    ],
    "answer": "Abdulsalami Abubakar"
  },



  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the name of the traditional Yoruba attire for men?",
    options: ["Agbada", "Isiagu", "Buba", "Danshiki"],
    answer: "Agbada"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which festival is celebrated by the Igbo people?",
    options: ["New Yam Festival", "Durbar", "Argungu Festival", "Eyo Festival"],
    answer: "New Yam Festival"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the main staple food of the Tiv people?",
    options: ["Pounded yam", "Amala", "Tuwo", "Beniseed soup"],
    answer: "Pounded yam"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which tribe is known for the Eyo Festival?",
    options: ["Yoruba", "Igbo", "Hausa", "Fulani"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which tribe is known for the Eyo Festival?",
    options: ["Yoruba", "Igbo", "Hausa", "Fulani"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which festival is celebrated by the Igbo people?",
    options: ["New Yam Festival", "Durbar", "Argungu Festival", "Eyo Festival"],
    answer: "New Yam Festival"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is the name of the traditional Yoruba attire for men?",
    options: ["Agbada", "Isiagu", "Buba", "Danshiki"],
    answer: "Agbada"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which tribe is known for the Eyo Festival?",
    options: ["Yoruba", "Igbo", "Hausa", "Fulani"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What is the name of the traditional Yoruba attire for men?",
    options: ["Agbada", "Isiagu", "Buba", "Danshiki"],
    answer: "Agbada"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which Nigerian tribe is known for the talking drum?",
    options: ["Yoruba", "Igbo", "Hausa", "Ibibio"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which tribe is known for the Eyo Festival?",
    options: ["Yoruba", "Igbo", "Hausa", "Fulani"],
    answer: "Yoruba"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which festival is celebrated by the Igbo people?",
    options: ["New Yam Festival", "Durbar", "Argungu Festival", "Eyo Festival"],
    answer: "New Yam Festival"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which festival is celebrated by the Igbo people?",
    options: ["New Yam Festival", "Durbar", "Argungu Festival", "Eyo Festival"],
    answer: "New Yam Festival"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which festival is celebrated by the Igbo people?",
    options: ["New Yam Festival", "Durbar", "Argungu Festival", "Eyo Festival"],
    answer: "New Yam Festival"
  },


  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the significance of the New Yam Festival in Igbo culture?",
    "options": [
      "A mark of high traditional status",
      "It marks the end of the farming season",
      "Ekombi",
      "The river goddess Osun"
    ],
    "answer": "It marks the end of the farming season"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which masquerade is known for its spiritual significance among the Yoruba?",
    "options": [
      "To honour the Emir and showcase cavalry",
      "Egungun",
      "Igbo",
      "Beginning a meeting or event with blessings"
    ],
    "answer": "Egungun"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the Ekpe society known for in southeastern Nigeria?",
    "options": [
      "Beginning a meeting or event with blessings",
      "Traditional law enforcement and cultural rituals",
      "Egungun",
      "Argungu Fishing Festival"
    ],
    "answer": "Traditional law enforcement and cultural rituals"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian ethnic group celebrates the Sharo festival?",
    "options": [
      "An archaeological site of ancient Igbo civilization",
      "Fulani",
      "Olu",
      "Gangan"
    ],
    "answer": "Fulani"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Omoluabi' in Yoruba culture?",
    "options": [
      "Beginning a meeting or event with blessings",
      "Yoruba",
      "A person of good character",
      "A'nger"
    ],
    "answer": "A person of good character"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which traditional attire is commonly worn by Tiv people?",
    "options": [
      "Benin people",
      "A'nger",
      "First daughter",
      "Olu"
    ],
    "answer": "A'nger"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "In Hausa culture, what is the purpose of the Durbar festival?",
    "options": [
      "Yoruba",
      "Praise poetry used to recall lineage and virtues",
      "To honour the Emir and showcase cavalry",
      "A mark of high traditional status"
    ],
    "answer": "To honour the Emir and showcase cavalry"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which musical instrument is known as a talking drum in Yoruba culture?",
    "options": [
      "Igbo",
      "An archaeological site of ancient Igbo civilization",
      "Gangan",
      "It marks the end of the farming season"
    ],
    "answer": "Gangan"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the Benin Igue festival celebrated for?",
    "options": [
      "The river goddess Osun",
      "Praise poetry used to recall lineage and virtues",
      "To renew the Oba's spiritual powers",
      "Ekombi"
    ],
    "answer": "To renew the Oba's spiritual powers"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian festival involves boat regattas and is celebrated in the riverine areas?",
    "options": [
      "To honour the Emir and showcase cavalry",
      "Spiritual renewal of the Oba of Benin",
      "Argungu Fishing Festival",
      "Ekombi"
    ],
    "answer": "Argungu Fishing Festival"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What does 'Igbo-Ukwu' refer to in Nigerian cultural history?",
    "options": [
      "An archaeological site of ancient Igbo civilization",
      "Benin people",
      "A person of good character",
      "A'nger"
    ],
    "answer": "An archaeological site of ancient Igbo civilization"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which group is traditionally known for bronze casting in Nigeria?",
    "options": [
      "An archaeological site of ancient Igbo civilization",
      "A'nger",
      "It marks the end of the farming season",
      "Benin people"
    ],
    "answer": "Benin people"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian ethnic group uses kola nut in rituals and greetings?",
    "options": [
      "Gangan",
      "Egungun",
      "Igbo",
      "To renew the Oba's spiritual powers"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the Itsekiri traditional title for a king?",
    "options": [
      "Olu",
      "Kanuri",
      "Egungun",
      "Spiritual renewal of the Oba of Benin"
    ],
    "answer": "Olu"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the cultural role of the 'Oriki' in Yoruba society?",
    "options": [
      "Benin people",
      "The river goddess Osun",
      "Praise poetry used to recall lineage and virtues",
      "A mark of high traditional status"
    ],
    "answer": "Praise poetry used to recall lineage and virtues"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Ada' in Igbo tradition?",
    "options": [
      "Egungun",
      "First daughter",
      "It marks the end of the farming season",
      "Igbo"
    ],
    "answer": "First daughter"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which northern Nigerian group is known for their colorful embroidery work?",
    "options": [
      "Kanuri",
      "A'nger",
      "Spiritual renewal of the Oba of Benin",
      "Argungu Fishing Festival"
    ],
    "answer": "Kanuri"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "In Nigerian culture, what does the term 'breaking the kola' signify?",
    "options": [
      "Beginning a meeting or event with blessings",
      "To honour the Emir and showcase cavalry",
      "A mark of high traditional status",
      "Kanuri"
    ],
    "answer": "Beginning a meeting or event with blessings"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the name of the dance performed by Efik maidens during their coming-of-age ceremony?",
    "options": [
      "An archaeological site of ancient Igbo civilization",
      "Fulani",
      "Ekombi",
      "First daughter"
    ],
    "answer": "Ekombi"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which language group do the Urhobo people belong to?",
    "options": [
      "A'nger",
      "First daughter",
      "Edoid",
      "It marks the end of the farming season"
    ],
    "answer": "Edoid"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What traditional craft is the Nupe ethnic group known for?",
    "options": [
      "To honour the Emir and showcase cavalry",
      "Glass bead making",
      "Yoruba",
      "To renew the Oba's spiritual powers"
    ],
    "answer": "Glass bead making"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What does the Yoruba festival 'Osun-Osogbo' honour?",
    "options": [
      "An archaeological site of ancient Igbo civilization",
      "It marks the end of the farming season",
      "The river goddess Osun",
      "Praise poetry used to recall lineage and virtues"
    ],
    "answer": "The river goddess Osun"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which ethnic group celebrates the 'Eyo' festival?",
    "options": [
      "Yoruba",
      "Olu",
      "It marks the end of the farming season",
      "Igbo"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the significance of the 'Igue' festival?",
    "options": [
      "Spiritual renewal of the Oba of Benin",
      "Fulani",
      "Ekombi",
      "It marks the end of the farming season"
    ],
    "answer": "Spiritual renewal of the Oba of Benin"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "In Igbo culture, what does the 'Ozo' title represent?",
    "options": [
      "Olu",
      "A person of good character",
      "Glass bead making",
      "A mark of high traditional status"
    ],
    "answer": "A mark of high traditional status"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the significance of the New Yam Festival in Igbo culture?",
    "options": [
      "Yoruba",
      "Beginning a meeting or event with blessings",
      "Edoid",
      "It marks the end of the farming season"
    ],
    "answer": "It marks the end of the farming season"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which masquerade is known for its spiritual significance among the Yoruba?",
    "options": [
      "Kanuri",
      "A mark of high traditional status",
      "Igbo",
      "Egungun"
    ],
    "answer": "Egungun"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the Ekpe society known for in southeastern Nigeria?",
    "options": [
      "The river goddess Osun",
      "Traditional law enforcement and cultural rituals",
      "Igbo",
      "A mark of high traditional status"
    ],
    "answer": "Traditional law enforcement and cultural rituals"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian ethnic group celebrates the Sharo festival?",
    "options": [
      "Fulani",
      "Spiritual renewal of the Oba of Benin",
      "Olu",
      "The river goddess Osun"
    ],
    "answer": "Fulani"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Omoluabi' in Yoruba culture?",
    "options": [
      "Kanuri",
      "Egungun",
      "Argungu Fishing Festival",
      "A person of good character"
    ],
    "answer": "A person of good character"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which traditional attire is commonly worn by Tiv people?",
    "options": [
      "To honour the Emir and showcase cavalry",
      "First daughter",
      "A'nger",
      "Gangan"
    ],
    "answer": "A'nger"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "In Hausa culture, what is the purpose of the Durbar festival?",
    "options": [
      "Igbo",
      "To honour the Emir and showcase cavalry",
      "Edoid",
      "Spiritual renewal of the Oba of Benin"
    ],
    "answer": "To honour the Emir and showcase cavalry"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which musical instrument is known as a talking drum in Yoruba culture?",
    "options": [
      "It marks the end of the farming season",
      "Igbo",
      "Praise poetry used to recall lineage and virtues",
      "Gangan"
    ],
    "answer": "Gangan"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the Benin Igue festival celebrated for?",
    "options": [
      "Igbo",
      "A mark of high traditional status",
      "First daughter",
      "To renew the Oba's spiritual powers"
    ],
    "answer": "To renew the Oba's spiritual powers"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian festival involves boat regattas and is celebrated in the riverine areas?",
    "options": [
      "Edoid",
      "A'nger",
      "Argungu Fishing Festival",
      "To renew the Oba's spiritual powers"
    ],
    "answer": "Argungu Fishing Festival"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What does 'Igbo-Ukwu' refer to in Nigerian cultural history?",
    "options": [
      "Olu",
      "First daughter",
      "It marks the end of the farming season",
      "An archaeological site of ancient Igbo civilization"
    ],
    "answer": "An archaeological site of ancient Igbo civilization"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which group is traditionally known for bronze casting in Nigeria?",
    "options": [
      "Egungun",
      "First daughter",
      "Olu",
      "Benin people"
    ],
    "answer": "Benin people"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian ethnic group uses kola nut in rituals and greetings?",
    "options": [
      "Beginning a meeting or event with blessings",
      "Glass bead making",
      "A'nger",
      "Igbo"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the Itsekiri traditional title for a king?",
    "options": [
      "Egungun",
      "Igbo",
      "Olu",
      "Traditional law enforcement and cultural rituals"
    ],
    "answer": "Olu"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the cultural role of the 'Oriki' in Yoruba society?",
    "options": [
      "To renew the Oba's spiritual powers",
      "Praise poetry used to recall lineage and virtues",
      "First daughter",
      "Ekombi"
    ],
    "answer": "Praise poetry used to recall lineage and virtues"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Ada' in Igbo tradition?",
    "options": [
      "To honour the Emir and showcase cavalry",
      "To renew the Oba's spiritual powers",
      "An archaeological site of ancient Igbo civilization",
      "First daughter"
    ],
    "answer": "First daughter"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which northern Nigerian group is known for their colorful embroidery work?",
    "options": [
      "Gangan",
      "Ekombi",
      "Kanuri",
      "Fulani"
    ],
    "answer": "Kanuri"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "In Nigerian culture, what does the term 'breaking the kola' signify?",
    "options": [
      "Beginning a meeting or event with blessings",
      "A mark of high traditional status",
      "Praise poetry used to recall lineage and virtues",
      "It marks the end of the farming season"
    ],
    "answer": "Beginning a meeting or event with blessings"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the name of the dance performed by Efik maidens during their coming-of-age ceremony?",
    "options": [
      "A person of good character",
      "Ekombi",
      "To honour the Emir and showcase cavalry",
      "Argungu Fishing Festival"
    ],
    "answer": "Ekombi"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which language group do the Urhobo people belong to?",
    "options": [
      "Gangan",
      "Traditional law enforcement and cultural rituals",
      "Edoid",
      "Argungu Fishing Festival"
    ],
    "answer": "Edoid"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What traditional craft is the Nupe ethnic group known for?",
    "options": [
      "It marks the end of the farming season",
      "Edoid",
      "Glass bead making",
      "Ekombi"
    ],
    "answer": "Glass bead making"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What does the Yoruba festival 'Osun-Osogbo' honour?",
    "options": [
      "To honour the Emir and showcase cavalry",
      "The river goddess Osun",
      "Benin people",
      "Olu"
    ],
    "answer": "The river goddess Osun"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "Which ethnic group celebrates the 'Eyo' festival?",
    "options": [
      "Gangan",
      "Yoruba",
      "Traditional law enforcement and cultural rituals",
      "Spiritual renewal of the Oba of Benin"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "What is the significance of the 'Igue' festival?",
    "options": [
      "Spiritual renewal of the Oba of Benin",
      "Kanuri",
      "It marks the end of the farming season",
      "Egungun"
    ],
    "answer": "Spiritual renewal of the Oba of Benin"
  },
  {
    "category": "Culture",
    "difficulty": "Hard",
    "question": "In Igbo culture, what does the 'Ozo' title represent?",
    "options": [
      "A mark of high traditional status",
      "An archaeological site of ancient Igbo civilization",
      "Egungun",
      "Olu"
    ],
    "answer": "A mark of high traditional status"
  },



  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian tribe is known for the Gelede masquerade?",
    "options": [
      "Yoruba",
      "Fufu",
      "Southwest",
      "Igwe"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the traditional title of the Igbo king?",
    "options": [
      "Hausa",
      "Coral",
      "Igwe",
      "Igbo"
    ],
    "answer": "Igwe"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which ethnic group is associated with the 'Iri Ji' festival?",
    "options": [
      "Igbo",
      "Fufu",
      "A flowing wide-sleeved robe worn by men",
      "Yoruba"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the traditional Yoruba greeting for elders?",
    "options": [
      "Igbo traditional wear with lion head motifs",
      "Yoruba",
      "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301",
      "Symbol of wealth and celebration"
    ],
    "answer": "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian dish is made from pounded yam and melon seed soup?",
    "options": [
      "Hausa",
      "Egusi soup",
      "Argungu Festival",
      "Bride price payment"
    ],
    "answer": "Egusi soup"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian attire is called 'Isi Agu'?",
    "options": [
      "Igbo",
      "Yoruba",
      "Igbo traditional wear with lion head motifs",
      "Egusi soup"
    ],
    "answer": "Igbo traditional wear with lion head motifs"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the staple food of the Hausa people?",
    "options": [
      "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301",
      "Igbo traditional wear with lion head motifs",
      "Tuwo",
      "Apala"
    ],
    "answer": "Tuwo"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the name of the traditional Igbo dance involving quick footwork and rhythm?",
    "options": [
      "Atilogwu",
      "Igbo traditional wear with lion head motifs",
      "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301",
      "Bride price payment"
    ],
    "answer": "Atilogwu"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which ethnic group celebrates the 'Ofala' festival?",
    "options": [
      "A flowing wide-sleeved robe worn by men",
      "Egusi soup",
      "Preserve history and teach morals",
      "Igbo"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is 'Agbada' in Nigerian culture?",
    "options": [
      "North",
      "Tuwo",
      "A flowing wide-sleeved robe worn by men",
      "Yoruba"
    ],
    "answer": "A flowing wide-sleeved robe worn by men"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian people traditionally wear 'George' wrappers?",
    "options": [
      "Efik/Ibibio",
      "Bride price payment",
      "Tuwo",
      "Yoruba"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which region in Nigeria is popular for calabash decoration?",
    "options": [
      "Bride price payment",
      "Igbo",
      "North",
      "Benin"
    ],
    "answer": "North"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the main cultural significance of yam in Nigeria?",
    "options": [
      "Igwe",
      "Symbol of wealth and celebration",
      "Atilogwu",
      "Preserve history and teach morals"
    ],
    "answer": "Symbol of wealth and celebration"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which festival marks the beginning of fishing season in Argungu?",
    "options": [
      "Atilogwu",
      "Argungu Festival",
      "Bride price payment",
      "Igwe"
    ],
    "answer": "Argungu Festival"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the term for the Yoruba king?",
    "options": [
      "Egusi soup",
      "Mmanwu",
      "Tuwo",
      "Oba"
    ],
    "answer": "Oba"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian group traditionally makes bronze sculptures?",
    "options": [
      "Benin",
      "Yoruba",
      "Oba",
      "Igwe"
    ],
    "answer": "Benin"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is a common wedding tradition across many Nigerian cultures?",
    "options": [
      "Oba",
      "North",
      "Bride price payment",
      "Egusi soup"
    ],
    "answer": "Bride price payment"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian music style originated from Yoruba praise singing?",
    "options": [
      "Igbo",
      "Yoruba",
      "Tuwo",
      "Apala"
    ],
    "answer": "Apala"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What material is commonly used in traditional Nigerian beadwork?",
    "options": [
      "Coral",
      "Fufu",
      "Argungu Festival",
      "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301"
    ],
    "answer": "Coral"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian tribe uses the term 'Barka da zuwa' for greetings?",
    "options": [
      "Tuwo",
      "Hausa",
      "Argungu Festival",
      "Oba"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian food is made from fermented cassava and often eaten with soup?",
    "options": [
      "Fufu",
      "Symbol of wealth and celebration",
      "Yoruba",
      "Southwest"
    ],
    "answer": "Fufu"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the cultural function of storytelling in Nigerian villages?",
    "options": [
      "Igbo",
      "Igwe",
      "Coral",
      "Preserve history and teach morals"
    ],
    "answer": "Preserve history and teach morals"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian tribe is known for the colorful Ankara and Aso-ebi culture?",
    "options": [
      "Fufu",
      "Southwest",
      "Efik/Ibibio",
      "Yoruba"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the name for the masquerade festival among the Igbos?",
    "options": [
      "Oba",
      "Egusi soup",
      "Symbol of wealth and celebration",
      "Mmanwu"
    ],
    "answer": "Mmanwu"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian region is renowned for tie-dye (adire) textiles?",
    "options": [
      "Preserve history and teach morals",
      "Fufu",
      "Southwest",
      "Hausa"
    ],
    "answer": "Southwest"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian tribe is known for the Gelede masquerade?",
    "options": [
      "Southwest",
      "Preserve history and teach morals",
      "Apala",
      "Yoruba"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the traditional title of the Igbo king?",
    "options": [
      "Symbol of wealth and celebration",
      "Fufu",
      "Mmanwu",
      "Igwe"
    ],
    "answer": "Igwe"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which ethnic group is associated with the 'Iri Ji' festival?",
    "options": [
      "Symbol of wealth and celebration",
      "Oba",
      "Igbo",
      "Benin"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the traditional Yoruba greeting for elders?",
    "options": [
      "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301",
      "Atilogwu",
      "Igbo",
      "Hausa"
    ],
    "answer": "\u1eb8 k\u00fa \u1ecdj\u1ecd\u0301"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian dish is made from pounded yam and melon seed soup?",
    "options": [
      "Igbo",
      "Tuwo",
      "Egusi soup",
      "Hausa"
    ],
    "answer": "Egusi soup"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian attire is called 'Isi Agu'?",
    "options": [
      "Igwe",
      "Igbo traditional wear with lion head motifs",
      "Efik/Ibibio",
      "Coral"
    ],
    "answer": "Igbo traditional wear with lion head motifs"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the staple food of the Hausa people?",
    "options": [
      "Preserve history and teach morals",
      "Tuwo",
      "Atilogwu",
      "Egusi soup"
    ],
    "answer": "Tuwo"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the name of the traditional Igbo dance involving quick footwork and rhythm?",
    "options": [
      "Southwest",
      "Atilogwu",
      "North",
      "Igwe"
    ],
    "answer": "Atilogwu"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which ethnic group celebrates the 'Ofala' festival?",
    "options": [
      "Hausa",
      "Argungu Festival",
      "Igbo",
      "Bride price payment"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is 'Agbada' in Nigerian culture?",
    "options": [
      "Benin",
      "Igbo traditional wear with lion head motifs",
      "A flowing wide-sleeved robe worn by men",
      "Apala"
    ],
    "answer": "A flowing wide-sleeved robe worn by men"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian people traditionally wear 'George' wrappers?",
    "options": [
      "Igbo traditional wear with lion head motifs",
      "Mmanwu",
      "Efik/Ibibio",
      "Preserve history and teach morals"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which region in Nigeria is popular for calabash decoration?",
    "options": [
      "A flowing wide-sleeved robe worn by men",
      "North",
      "Argungu Festival",
      "Igbo"
    ],
    "answer": "North"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the main cultural significance of yam in Nigeria?",
    "options": [
      "Symbol of wealth and celebration",
      "Coral",
      "Benin",
      "Efik/Ibibio"
    ],
    "answer": "Symbol of wealth and celebration"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which festival marks the beginning of fishing season in Argungu?",
    "options": [
      "Argungu Festival",
      "Mmanwu",
      "Symbol of wealth and celebration",
      "Igbo"
    ],
    "answer": "Argungu Festival"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the term for the Yoruba king?",
    "options": [
      "Symbol of wealth and celebration",
      "Igbo",
      "Hausa",
      "Oba"
    ],
    "answer": "Oba"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian group traditionally makes bronze sculptures?",
    "options": [
      "Efik/Ibibio",
      "Fufu",
      "North",
      "Benin"
    ],
    "answer": "Benin"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is a common wedding tradition across many Nigerian cultures?",
    "options": [
      "Fufu",
      "A flowing wide-sleeved robe worn by men",
      "Yoruba",
      "Bride price payment"
    ],
    "answer": "Bride price payment"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian music style originated from Yoruba praise singing?",
    "options": [
      "Symbol of wealth and celebration",
      "Igbo",
      "Yoruba",
      "Apala"
    ],
    "answer": "Apala"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What material is commonly used in traditional Nigerian beadwork?",
    "options": [
      "Mmanwu",
      "Coral",
      "Egusi soup",
      "Symbol of wealth and celebration"
    ],
    "answer": "Coral"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian tribe uses the term 'Barka da zuwa' for greetings?",
    "options": [
      "Yoruba",
      "Tuwo",
      "Igwe",
      "Hausa"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian food is made from fermented cassava and often eaten with soup?",
    "options": [
      "Fufu",
      "Egusi soup",
      "Argungu Festival",
      "Southwest"
    ],
    "answer": "Fufu"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the cultural function of storytelling in Nigerian villages?",
    "options": [
      "Tuwo",
      "Preserve history and teach morals",
      "Igwe",
      "Argungu Festival"
    ],
    "answer": "Preserve history and teach morals"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian tribe is known for the colorful Ankara and Aso-ebi culture?",
    "options": [
      "Benin",
      "Tuwo",
      "Mmanwu",
      "Yoruba"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "What is the name for the masquerade festival among the Igbos?",
    "options": [
      "Mmanwu",
      "Apala",
      "Argungu Festival",
      "North"
    ],
    "answer": "Mmanwu"
  },
  {
    "category": "Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian region is renowned for tie-dye (adire) textiles?",
    "options": [
      "Southwest",
      "Yoruba",
      "Oba",
      "Egusi soup"
    ],
    "answer": "Southwest"
  },


  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is Nigeria\u2019s most widely spoken language?",
    "options": [
      "Moi Moi",
      "Eyo Festival",
      "Afrobeats",
      "Hausa"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which traditional Nigerian attire is worn by both men and women?",
    "options": [
      "Suya",
      "Eyo Festival",
      "Ankara",
      "Hands"
    ],
    "answer": "Ankara"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is a common Nigerian greeting?",
    "options": [
      "Good morning",
      "Owambe",
      "Suya",
      "Yoruba"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which soup is commonly eaten in Southern Nigeria?",
    "options": [
      "Shaku Shaku",
      "A traditional head wrap",
      "Yoruba",
      "Egusi soup"
    ],
    "answer": "Egusi soup"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian food is made from beans?",
    "options": [
      "Child dedication",
      "Moi Moi",
      "Tomato Stew",
      "A traditional head wrap"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the Nigerian dance that involves hip and leg movement?",
    "options": [
      "Hands",
      "Shaku Shaku",
      "Good morning",
      "Afrobeats"
    ],
    "answer": "Shaku Shaku"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which festival is popular in Lagos and features white-clad masqueraders?",
    "options": [
      "Jollof Rice",
      "Puff Puff",
      "Eyo Festival",
      "Tomato Stew"
    ],
    "answer": "Eyo Festival"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria's national dish?",
    "options": [
      "Cultural dance",
      "Jollof Rice",
      "Ankara",
      "Aso Ebi"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian tribe is known for their talking drums?",
    "options": [
      "Yoruba",
      "Hands",
      "Pineapple",
      "Eyo Festival"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is a gele in Nigerian culture?",
    "options": [
      "Moi Moi",
      "A traditional head wrap",
      "Jollof Rice",
      "Child dedication"
    ],
    "answer": "A traditional head wrap"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian tribe is famous for their intricate hairstyles?",
    "options": [
      "Hausa",
      "Pineapple",
      "Fulani",
      "Afrobeats"
    ],
    "answer": "Fulani"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name of the attire often worn during Nigerian weddings?",
    "options": [
      "Hands",
      "Egusi soup",
      "Aso Ebi",
      "Owambe"
    ],
    "answer": "Aso Ebi"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which color is mostly used during traditional events in Nigeria?",
    "options": [
      "Tomato Stew",
      "Child dedication",
      "Benin",
      "White"
    ],
    "answer": "White"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name of a Nigerian party called?",
    "options": [
      "Puff Puff",
      "Fulani",
      "Good morning",
      "Owambe"
    ],
    "answer": "Owambe"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What fruit is popularly used in Nigerian fruit salads?",
    "options": [
      "Fulani",
      "Hands",
      "Afrobeats",
      "Pineapple"
    ],
    "answer": "Pineapple"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which popular Nigerian food is made by deep frying dough?",
    "options": [
      "Hands",
      "Cultural dance",
      "Suya",
      "Puff Puff"
    ],
    "answer": "Puff Puff"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the popular Nigerian meat skewer snack?",
    "options": [
      "Suya",
      "Hausa",
      "White",
      "Benin"
    ],
    "answer": "Suya"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which tribe is known for their large masquerades?",
    "options": [
      "Igbo",
      "Moi Moi",
      "Good morning",
      "White"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which tribe is known for their colourful beads and coral accessories?",
    "options": [
      "Eyo Festival",
      "Ankara",
      "Benin",
      "Aso Ebi"
    ],
    "answer": "Benin"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian region is known for spicy food?",
    "options": [
      "Aso Ebi",
      "Fulani",
      "A traditional head wrap",
      "South West"
    ],
    "answer": "South West"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which music genre is popular in modern Nigerian culture?",
    "options": [
      "Shaku Shaku",
      "Yoruba",
      "Pineapple",
      "Afrobeats"
    ],
    "answer": "Afrobeats"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What do Nigerians traditionally use to eat pounded yam?",
    "options": [
      "Puff Puff",
      "Moi Moi",
      "Hands",
      "Egusi soup"
    ],
    "answer": "Hands"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name for local dance in Nigeria?",
    "options": [
      "Igbo",
      "Child dedication",
      "Cultural dance",
      "Aso Ebi"
    ],
    "answer": "Cultural dance"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is a common Nigerian naming ceremony called?",
    "options": [
      "Suya",
      "Child dedication",
      "Jollof Rice",
      "Tomato Stew"
    ],
    "answer": "Child dedication"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What popular Nigerian stew includes tomatoes and pepper?",
    "options": [
      "Puff Puff",
      "Ankara",
      "Eyo Festival",
      "Tomato Stew"
    ],
    "answer": "Tomato Stew"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is Nigeria\u2019s most widely spoken language?",
    "options": [
      "Hausa",
      "A traditional head wrap",
      "Good morning",
      "Igbo"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which traditional Nigerian attire is worn by both men and women?",
    "options": [
      "Owambe",
      "Good morning",
      "Hausa",
      "Ankara"
    ],
    "answer": "Ankara"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is a common Nigerian greeting?",
    "options": [
      "Aso Ebi",
      "Good morning",
      "Egusi soup",
      "Tomato Stew"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which soup is commonly eaten in Southern Nigeria?",
    "options": [
      "A traditional head wrap",
      "Moi Moi",
      "Egusi soup",
      "South West"
    ],
    "answer": "Egusi soup"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian food is made from beans?",
    "options": [
      "Moi Moi",
      "Yoruba",
      "Ankara",
      "White"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the Nigerian dance that involves hip and leg movement?",
    "options": [
      "Shaku Shaku",
      "Igbo",
      "Jollof Rice",
      "Tomato Stew"
    ],
    "answer": "Shaku Shaku"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which festival is popular in Lagos and features white-clad masqueraders?",
    "options": [
      "Hands",
      "Eyo Festival",
      "Ankara",
      "Jollof Rice"
    ],
    "answer": "Eyo Festival"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria's national dish?",
    "options": [
      "Moi Moi",
      "Good morning",
      "Hausa",
      "Jollof Rice"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian tribe is known for their talking drums?",
    "options": [
      "Yoruba",
      "Cultural dance",
      "Ankara",
      "Afrobeats"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is a gele in Nigerian culture?",
    "options": [
      "A traditional head wrap",
      "Fulani",
      "Afrobeats",
      "Puff Puff"
    ],
    "answer": "A traditional head wrap"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian tribe is famous for their intricate hairstyles?",
    "options": [
      "Fulani",
      "Good morning",
      "Moi Moi",
      "Hands"
    ],
    "answer": "Fulani"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name of the attire often worn during Nigerian weddings?",
    "options": [
      "Aso Ebi",
      "Egusi soup",
      "Benin",
      "Moi Moi"
    ],
    "answer": "Aso Ebi"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which color is mostly used during traditional events in Nigeria?",
    "options": [
      "Shaku Shaku",
      "White",
      "Hausa",
      "Hands"
    ],
    "answer": "White"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name of a Nigerian party called?",
    "options": [
      "Ankara",
      "Owambe",
      "Moi Moi",
      "A traditional head wrap"
    ],
    "answer": "Owambe"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What fruit is popularly used in Nigerian fruit salads?",
    "options": [
      "Owambe",
      "Pineapple",
      "Shaku Shaku",
      "Puff Puff"
    ],
    "answer": "Pineapple"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which popular Nigerian food is made by deep frying dough?",
    "options": [
      "Puff Puff",
      "Hands",
      "Pineapple",
      "Tomato Stew"
    ],
    "answer": "Puff Puff"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the popular Nigerian meat skewer snack?",
    "options": [
      "Hands",
      "A traditional head wrap",
      "Aso Ebi",
      "Suya"
    ],
    "answer": "Suya"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which tribe is known for their large masquerades?",
    "options": [
      "Igbo",
      "Moi Moi",
      "Hausa",
      "Ankara"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which tribe is known for their colourful beads and coral accessories?",
    "options": [
      "Egusi soup",
      "Suya",
      "Hands",
      "Benin"
    ],
    "answer": "Benin"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian region is known for spicy food?",
    "options": [
      "Afrobeats",
      "Fulani",
      "Shaku Shaku",
      "South West"
    ],
    "answer": "South West"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "Which music genre is popular in modern Nigerian culture?",
    "options": [
      "Afrobeats",
      "A traditional head wrap",
      "Child dedication",
      "White"
    ],
    "answer": "Afrobeats"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What do Nigerians traditionally use to eat pounded yam?",
    "options": [
      "Hands",
      "Benin",
      "Tomato Stew",
      "Puff Puff"
    ],
    "answer": "Hands"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is the name for local dance in Nigeria?",
    "options": [
      "Child dedication",
      "Aso Ebi",
      "Hausa",
      "Cultural dance"
    ],
    "answer": "Cultural dance"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What is a common Nigerian naming ceremony called?",
    "options": [
      "South West",
      "A traditional head wrap",
      "White",
      "Child dedication"
    ],
    "answer": "Child dedication"
  },
  {
    "category": "Culture",
    "difficulty": "Easy",
    "question": "What popular Nigerian stew includes tomatoes and pepper?",
    "options": [
      "Ankara",
      "Tomato Stew",
      "Jollof Rice",
      "Owambe"
    ],
    "answer": "Tomato Stew"
  },






  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nigerian artist sang 'Fall'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Olamide"],
    answer: "Davido"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nollywood actor starred in 'Living in Bondage'?",
    options: ["Ramsey Nouah", "Pete Edochie", "Kenneth Okonkwo", "Kanayo O. Kanayo"],
    answer: "Kenneth Okonkwo"
  },

  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nigerian won Big Brother Naija Season 5?",
    options: ["Laycon", "Miracle", "Efe", "Whitemoney"],
    answer: "Laycon"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nigerian comedian is known as 'Sabinus'?",
    options: ["Broda Shaggi", "Mr Macaroni", "Sabinus", "Zicsaloma"],
    answer: "Sabinus"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Who sang 'Essence' featuring Tems?",
    options: ["Burna Boy", "Omah Lay", "Wizkid", "Davido"],
    answer: "Wizkid"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "What year did Nollywood officially begin?",
    options: ["1990", "1992", "1995", "2000"],
    answer: "1992"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nigerian influencer is known for cooking records?",
    options: ["Chef Chi", "Chef Hilda Baci", "Chef Eros", "Chef Fregz"],
    answer: "Chef Hilda Baci"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Who is known for the phrase 'You are doing well!'?",
    options: ["Mr Macaroni", "Zicsaloma", "Sabinus", "Lasisi Elenu"],
    answer: "Mr Macaroni"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which rapper is known as 'M.I'?",
    options: ["Phyno", "Olamide", "M.I Abaga", "Vector"],
    answer: "M.I Abaga"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "What’s the real name of Falz?",
    options: ["Folarin Falana", "Femi Falana", "Folabi Folarin", "Funsho Falz"],
    answer: "Folarin Falana"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which film features the character 'Andy Okeke'?",
    options: ["Living in Bondage", "October 1", "Lionheart", "King of Boys"],
    answer: "Living in Bondage"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Who directed the film 'The Wedding Party'?",
    options: ["Genevieve Nnaji", "Kemi Adetiba", "Mo Abudu", "Kunle Afolayan"],
    answer: "Kemi Adetiba"
  },
  
  

  
  
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nigerian artist is known as 'African Giant'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"],
    answer: "Burna Boy"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Who is popularly known as 'OBO'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Rema"],
    answer: "Davido"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "Which Nigerian artist sang 'Fall'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Olamide"],
    answer: "Davido"
  },
  {
    category: "Pop Culture",
    difficulty: "Easy",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "Which Nigerian artist sang 'Fall'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Olamide"],
    answer: "Davido"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "Which Nigerian artist is known as 'African Giant'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"],
    answer: "Burna Boy"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "Which Nigerian artist is known as 'African Giant'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"],
    answer: "Burna Boy"
  },
  {
    category: "Pop Culture",
    difficulty: "Medium",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Hard",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Hard",
    question: "What is the name of Nigeria's version of Big Brother?",
    options: ["Big Brother Africa", "Naija House", "Big Brother Naija", "Reality House Naija"],
    answer: "Big Brother Naija"
  },
  {
    category: "Pop Culture",
    difficulty: "Hard",
    question: "Which Nollywood actor starred in 'Living in Bondage'?",
    options: ["Ramsey Nouah", "Pete Edochie", "Kenneth Okonkwo", "Kanayo O. Kanayo"],
    answer: "Kenneth Okonkwo"
  },
  {
    category: "Pop Culture",
    difficulty: "Hard",
    question: "Which Nigerian artist is known as 'African Giant'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"],
    answer: "Burna Boy"
  },
  {
    category: "Pop Culture",
    difficulty: "Hard",
    question: "Which Nigerian artist sang 'Fall'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Olamide"],
    answer: "Davido"
  },
  {
    category: "Pop Culture",
    difficulty: "Hard",
    question: "Who is popularly known as 'OBO'?",
    options: ["Wizkid", "Burna Boy", "Davido", "Rema"],
    answer: "Davido"
  },



  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist won a Grammy for 'Twice As Tall'?",
    "options": [
      "Naira Marley",
      "Banky W",
      "Burna Boy",
      "Tiwatope Savage"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the real name of the artist known as Wizkid?",
    "options": [
      "Funke Akindele",
      "1992",
      "Ayodeji Balogun",
      "Wizkid"
    ],
    "answer": "Ayodeji Balogun"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian movie became the highest-grossing of all time?",
    "options": [
      "Wizkid",
      "Battle on Buka Street",
      "Tiwatope Savage",
      "CKay"
    ],
    "answer": "Battle on Buka Street"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who directed the film 'King of Boys'?",
    "options": [
      "Funke Akindele",
      "Kemi Adetiba",
      "Di'Ja",
      "Banky W"
    ],
    "answer": "Kemi Adetiba"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist featured Beyonc\u00e9 in 'Brown Skin Girl'?",
    "options": [
      "JTO Fashion",
      "Wizkid",
      "DJ Cuppy",
      "Chioma Akpotha"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the stage name of the artist Damini Ogulu?",
    "options": [
      "M.I Abaga",
      "Michael Collins Ajereh",
      "The Honest Bunch",
      "Burna Boy"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nollywood actress is also a politician and appeared in 'Chief Daddy'?",
    "options": [
      "Sola Sobowale",
      "Funke Akindele",
      "Big Brother Naija",
      "Ayodeji Balogun"
    ],
    "answer": "Funke Akindele"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist popularised the Zanku dance?",
    "options": [
      "Funke Akindele",
      "Zlatan Ibile",
      "Finesse - Pheelz & BNXN",
      "Burna Boy"
    ],
    "answer": "Zlatan Ibile"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who is the first Nigerian to win an Academy Award?",
    "options": [
      "Chioma Akpotha",
      "Art X Lagos",
      "Tijani Babatunde Folawiyo (Honorary)",
      "Big Brother Naija"
    ],
    "answer": "Tijani Babatunde Folawiyo (Honorary)"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist had a global hit with 'Essence'?",
    "options": [
      "Tiwatope Savage",
      "Tobi Bakre",
      "Wizkid",
      "JTO Fashion"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the full name of singer Tiwa Savage?",
    "options": [
      "Tiwatope Savage",
      "Sola Sobowale",
      "Wizkid",
      "1992"
    ],
    "answer": "Tiwatope Savage"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian comedian is known for 'Sabinus'?",
    "options": [
      "Emmanuel Ejekwu",
      "Lisa Folawiyo",
      "Kemi Adetiba",
      "Big Brother Naija"
    ],
    "answer": "Emmanuel Ejekwu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What year did Nollywood become globally recognized through 'Living in Bondage'?",
    "options": [
      "Wizkid",
      "1992",
      "Tijani Babatunde Folawiyo (Honorary)",
      "JTO Fashion"
    ],
    "answer": "1992"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist founded the 'Marlian' movement?",
    "options": [
      "Chioma Akpotha",
      "Di'Ja",
      "Tijani Babatunde Folawiyo (Honorary)",
      "Naira Marley"
    ],
    "answer": "Naira Marley"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian reality show launched Laycon to fame?",
    "options": [
      "Battle on Buka Street",
      "Big Brother Naija",
      "Wizkid",
      "Michael Collins Ajereh"
    ],
    "answer": "Big Brother Naija"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian movie streaming platform was acquired by Amazon?",
    "options": [
      "Lisa Folawiyo",
      "Afrinolly",
      "Kemi Adetiba",
      "Banky W"
    ],
    "answer": "Afrinolly"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who played the role of Eniola Salami in 'King of Boys'?",
    "options": [
      "Tiwatope Savage",
      "Kemi Adetiba",
      "M.I Abaga",
      "Sola Sobowale"
    ],
    "answer": "Sola Sobowale"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which DJ is internationally known as Nigeria's top female DJ?",
    "options": [
      "Chioma Akpotha",
      "Sola Sobowale",
      "DJ Cuppy",
      "The Honest Bunch"
    ],
    "answer": "DJ Cuppy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is Don Jazzy\u2019s real name?",
    "options": [
      "Wizkid",
      "Afrinolly",
      "Zlatan Ibile",
      "Michael Collins Ajereh"
    ],
    "answer": "Michael Collins Ajereh"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist released the hit song 'Last Last'?",
    "options": [
      "Zlatan",
      "Tijani Babatunde Folawiyo (Honorary)",
      "Wizkid",
      "Burna Boy"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian fashion designer has featured at Paris Fashion Week?",
    "options": [
      "Don Jazzy",
      "Victony",
      "Zazuu Zeh",
      "Lisa Folawiyo"
    ],
    "answer": "Lisa Folawiyo"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who is the founder of Mavin Records?",
    "options": [
      "Lisa Folawiyo",
      "Tijani Babatunde Folawiyo (Honorary)",
      "Don Jazzy",
      "Kemi Adetiba"
    ],
    "answer": "Don Jazzy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian pop star started out in the Mo\u2019Hits group?",
    "options": [
      "Wizkid",
      "Zlatan Ibile",
      "D'banj",
      "Funke Akindele"
    ],
    "answer": "D'banj"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian song was featured in the FIFA 2022 soundtrack?",
    "options": [
      "Zazuu Zeh",
      "JTO Fashion",
      "Finesse - Pheelz & BNXN",
      "1992"
    ],
    "answer": "Finesse - Pheelz & BNXN"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the original name of actor Mr. Ibu?",
    "options": [
      "John Okafor",
      "1992",
      "CKay",
      "Big Brother Naija"
    ],
    "answer": "John Okafor"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian actor won the Best Actor award at the AMVCA 2023?",
    "options": [
      "Emmanuel Ejekwu",
      "JTO Fashion",
      "Chioma Akpotha",
      "Tobi Bakre"
    ],
    "answer": "Tobi Bakre"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which artist coined the phrase 'Who dey breet?'?",
    "options": [
      "Skinny Girl in Transit",
      "Zlatan",
      "Chioma Akpotha",
      "Zlatan Ibile"
    ],
    "answer": "Zlatan"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian rapper is known for the album 'Talk About It'?",
    "options": [
      "Sola Sobowale",
      "M.I Abaga",
      "Kemi Adetiba",
      "Art X Lagos"
    ],
    "answer": "M.I Abaga"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which YouTube series by Ndani TV gained viral fame?",
    "options": [
      "John Okafor",
      "Funke Akindele",
      "1992",
      "Skinny Girl in Transit"
    ],
    "answer": "Skinny Girl in Transit"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist is known for the 'Amapiano' hit 'Soweto'?",
    "options": [
      "Victony",
      "Art X Lagos",
      "Skinny Girl in Transit",
      "Zlatan Ibile"
    ],
    "answer": "Victony"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian content creator became famous for street interviews?",
    "options": [
      "Emmanuel Ejekwu",
      "1992",
      "JTO Fashion",
      "Tayo Aina"
    ],
    "answer": "Tayo Aina"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian artist known for 'Love Nwantiti'?",
    "options": [
      "Di'Ja",
      "CKay",
      "John Okafor",
      "Lisa Folawiyo"
    ],
    "answer": "CKay"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which female artist was formerly signed to Mavin Records and now owns StewGang?",
    "options": [
      "1992",
      "Afrinolly",
      "Don Jazzy",
      "Di'Ja"
    ],
    "answer": "Di'Ja"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the signature slogan of singer Portable?",
    "options": [
      "Michael Collins Ajereh",
      "Zazuu Zeh",
      "Zlatan Ibile",
      "1992"
    ],
    "answer": "Zazuu Zeh"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian pop artist has a football-themed song called 'Monalisa'?",
    "options": [
      "Skinny Girl in Transit",
      "Zazuu Zeh",
      "Lojay",
      "Naira Marley"
    ],
    "answer": "Lojay"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian global fashion brand by Temi Otedola?",
    "options": [
      "John Okafor",
      "Chioma Akpotha",
      "D'banj",
      "JTO Fashion"
    ],
    "answer": "JTO Fashion"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian music executive managed Wizkid during his early career?",
    "options": [
      "Finesse - Pheelz & BNXN",
      "Lisa Folawiyo",
      "Battle on Buka Street",
      "Banky W"
    ],
    "answer": "Banky W"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian podcast featuring cultural debates by Falz and co?",
    "options": [
      "Funke Akindele",
      "DJ Cuppy",
      "The Honest Bunch",
      "D'banj"
    ],
    "answer": "The Honest Bunch"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian actress became a UNWFP Goodwill Ambassador in 2021?",
    "options": [
      "Lojay",
      "Chioma Akpotha",
      "Ayodeji Balogun",
      "Kemi Adetiba"
    ],
    "answer": "Chioma Akpotha"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Lagos-based art fair showcases Nigerian contemporary art?",
    "options": [
      "Don Jazzy",
      "Art X Lagos",
      "M.I Abaga",
      "Tayo Aina"
    ],
    "answer": "Art X Lagos"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist won a Grammy for 'Twice As Tall'?",
    "options": [
      "Burna Boy",
      "Banky W",
      "Victony",
      "Michael Collins Ajereh"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the real name of the artist known as Wizkid?",
    "options": [
      "John Okafor",
      "Tayo Aina",
      "CKay",
      "Ayodeji Balogun"
    ],
    "answer": "Ayodeji Balogun"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian movie became the highest-grossing of all time?",
    "options": [
      "Zlatan Ibile",
      "Battle on Buka Street",
      "Funke Akindele",
      "D'banj"
    ],
    "answer": "Battle on Buka Street"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who directed the film 'King of Boys'?",
    "options": [
      "Kemi Adetiba",
      "Tobi Bakre",
      "Zazuu Zeh",
      "Ayodeji Balogun"
    ],
    "answer": "Kemi Adetiba"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist featured Beyonc\u00e9 in 'Brown Skin Girl'?",
    "options": [
      "Wizkid",
      "Naira Marley",
      "Zazuu Zeh",
      "Tayo Aina"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the stage name of the artist Damini Ogulu?",
    "options": [
      "Kemi Adetiba",
      "Burna Boy",
      "Zlatan Ibile",
      "Zazuu Zeh"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nollywood actress is also a politician and appeared in 'Chief Daddy'?",
    "options": [
      "Funke Akindele",
      "Art X Lagos",
      "Lojay",
      "Battle on Buka Street"
    ],
    "answer": "Funke Akindele"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist popularised the Zanku dance?",
    "options": [
      "Zlatan Ibile",
      "Tijani Babatunde Folawiyo (Honorary)",
      "Wizkid",
      "M.I Abaga"
    ],
    "answer": "Zlatan Ibile"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who is the first Nigerian to win an Academy Award?",
    "options": [
      "Tijani Babatunde Folawiyo (Honorary)",
      "Emmanuel Ejekwu",
      "Ayodeji Balogun",
      "Don Jazzy"
    ],
    "answer": "Tijani Babatunde Folawiyo (Honorary)"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist had a global hit with 'Essence'?",
    "options": [
      "Banky W",
      "Wizkid",
      "CKay",
      "M.I Abaga"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the full name of singer Tiwa Savage?",
    "options": [
      "Tiwatope Savage",
      "JTO Fashion",
      "D'banj",
      "Tayo Aina"
    ],
    "answer": "Tiwatope Savage"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian comedian is known for 'Sabinus'?",
    "options": [
      "JTO Fashion",
      "Burna Boy",
      "CKay",
      "Emmanuel Ejekwu"
    ],
    "answer": "Emmanuel Ejekwu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What year did Nollywood become globally recognized through 'Living in Bondage'?",
    "options": [
      "M.I Abaga",
      "Burna Boy",
      "1992",
      "Kemi Adetiba"
    ],
    "answer": "1992"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist founded the 'Marlian' movement?",
    "options": [
      "Lojay",
      "Naira Marley",
      "Banky W",
      "Lisa Folawiyo"
    ],
    "answer": "Naira Marley"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian reality show launched Laycon to fame?",
    "options": [
      "Naira Marley",
      "Zlatan Ibile",
      "D'banj",
      "Big Brother Naija"
    ],
    "answer": "Big Brother Naija"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian movie streaming platform was acquired by Amazon?",
    "options": [
      "Victony",
      "Lojay",
      "1992",
      "Afrinolly"
    ],
    "answer": "Afrinolly"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who played the role of Eniola Salami in 'King of Boys'?",
    "options": [
      "Naira Marley",
      "Sola Sobowale",
      "Victony",
      "Zlatan Ibile"
    ],
    "answer": "Sola Sobowale"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which DJ is internationally known as Nigeria's top female DJ?",
    "options": [
      "Wizkid",
      "Di'Ja",
      "DJ Cuppy",
      "Michael Collins Ajereh"
    ],
    "answer": "DJ Cuppy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is Don Jazzy\u2019s real name?",
    "options": [
      "Michael Collins Ajereh",
      "Battle on Buka Street",
      "Art X Lagos",
      "Victony"
    ],
    "answer": "Michael Collins Ajereh"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist released the hit song 'Last Last'?",
    "options": [
      "Burna Boy",
      "D'banj",
      "1992",
      "Michael Collins Ajereh"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian fashion designer has featured at Paris Fashion Week?",
    "options": [
      "John Okafor",
      "Lisa Folawiyo",
      "Chioma Akpotha",
      "Lojay"
    ],
    "answer": "Lisa Folawiyo"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Who is the founder of Mavin Records?",
    "options": [
      "Wizkid",
      "CKay",
      "1992",
      "Don Jazzy"
    ],
    "answer": "Don Jazzy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian pop star started out in the Mo\u2019Hits group?",
    "options": [
      "The Honest Bunch",
      "Burna Boy",
      "Tijani Babatunde Folawiyo (Honorary)",
      "D'banj"
    ],
    "answer": "D'banj"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian song was featured in the FIFA 2022 soundtrack?",
    "options": [
      "Tobi Bakre",
      "Finesse - Pheelz & BNXN",
      "Big Brother Naija",
      "Skinny Girl in Transit"
    ],
    "answer": "Finesse - Pheelz & BNXN"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the original name of actor Mr. Ibu?",
    "options": [
      "Sola Sobowale",
      "John Okafor",
      "Michael Collins Ajereh",
      "Skinny Girl in Transit"
    ],
    "answer": "John Okafor"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian actor won the Best Actor award at the AMVCA 2023?",
    "options": [
      "Finesse - Pheelz & BNXN",
      "Wizkid",
      "Zlatan Ibile",
      "Tobi Bakre"
    ],
    "answer": "Tobi Bakre"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which artist coined the phrase 'Who dey breet?'?",
    "options": [
      "Zlatan",
      "DJ Cuppy",
      "Battle on Buka Street",
      "Tobi Bakre"
    ],
    "answer": "Zlatan"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian rapper is known for the album 'Talk About It'?",
    "options": [
      "Kemi Adetiba",
      "Don Jazzy",
      "Burna Boy",
      "M.I Abaga"
    ],
    "answer": "M.I Abaga"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which YouTube series by Ndani TV gained viral fame?",
    "options": [
      "Zazuu Zeh",
      "Skinny Girl in Transit",
      "D'banj",
      "Burna Boy"
    ],
    "answer": "Skinny Girl in Transit"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian artist is known for the 'Amapiano' hit 'Soweto'?",
    "options": [
      "Tobi Bakre",
      "Victony",
      "Afrinolly",
      "Battle on Buka Street"
    ],
    "answer": "Victony"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian content creator became famous for street interviews?",
    "options": [
      "Tayo Aina",
      "John Okafor",
      "Tijani Babatunde Folawiyo (Honorary)",
      "Kemi Adetiba"
    ],
    "answer": "Tayo Aina"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian artist known for 'Love Nwantiti'?",
    "options": [
      "Afrinolly",
      "Chioma Akpotha",
      "Burna Boy",
      "CKay"
    ],
    "answer": "CKay"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which female artist was formerly signed to Mavin Records and now owns StewGang?",
    "options": [
      "Naira Marley",
      "Di'Ja",
      "Banky W",
      "John Okafor"
    ],
    "answer": "Di'Ja"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the signature slogan of singer Portable?",
    "options": [
      "M.I Abaga",
      "John Okafor",
      "Wizkid",
      "Zazuu Zeh"
    ],
    "answer": "Zazuu Zeh"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian pop artist has a football-themed song called 'Monalisa'?",
    "options": [
      "Lisa Folawiyo",
      "Naira Marley",
      "Lojay",
      "Zlatan Ibile"
    ],
    "answer": "Lojay"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian global fashion brand by Temi Otedola?",
    "options": [
      "1992",
      "Tiwatope Savage",
      "JTO Fashion",
      "Finesse - Pheelz & BNXN"
    ],
    "answer": "JTO Fashion"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian music executive managed Wizkid during his early career?",
    "options": [
      "JTO Fashion",
      "Banky W",
      "Michael Collins Ajereh",
      "Lojay"
    ],
    "answer": "Banky W"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian podcast featuring cultural debates by Falz and co?",
    "options": [
      "Funke Akindele",
      "JTO Fashion",
      "The Honest Bunch",
      "Art X Lagos"
    ],
    "answer": "The Honest Bunch"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Nigerian actress became a UNWFP Goodwill Ambassador in 2021?",
    "options": [
      "Lisa Folawiyo",
      "Zlatan Ibile",
      "Chioma Akpotha",
      "Burna Boy"
    ],
    "answer": "Chioma Akpotha"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Hard",
    "question": "Which Lagos-based art fair showcases Nigerian contemporary art?",
    "options": [
      "M.I Abaga",
      "Lojay",
      "Burna Boy",
      "Art X Lagos"
    ],
    "answer": "Art X Lagos"
  },

  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist is nicknamed 'OBO'?",
    "options": [
      "Burna Boy",
      "Modern Nigerian woman\u2019s life",
      "Davido",
      "Disc Jockey"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What does AMVCA stand for in Nigerian pop culture?",
    "options": [
      "Dorcas Shola Fapson",
      "Oluwakaponeski",
      "Comic Connect Africa",
      "Africa Magic Viewers\u2019 Choice Awards"
    ],
    "answer": "Africa Magic Viewers\u2019 Choice Awards"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist's debut album is 'Superstar'?",
    "options": [
      "The Headies Awards",
      "Funke Akindele",
      "Wizkid",
      "Victor AD"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the name of the Nigerian TV station that airs Big Brother Naija?",
    "options": [
      "Davido",
      "Broda Shaggi",
      "Ebuka Obi-Uchendu",
      "Africa Magic"
    ],
    "answer": "Africa Magic"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is the host of Big Brother Naija?",
    "options": [
      "Shaku Shaku",
      "Instagram",
      "Ebuka Obi-Uchendu",
      "Hilda Baci"
    ],
    "answer": "Ebuka Obi-Uchendu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian actress starred in the film 'The Wedding Party'?",
    "options": [
      "Funke Akindele",
      "Hilda Baci",
      "Adesua Etomi",
      "Afrofusion"
    ],
    "answer": "Adesua Etomi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian song starts with 'She tell me say'?",
    "options": [
      "Wizkid",
      "Modern Nigerian woman\u2019s life",
      "Davido",
      "Fall - Davido"
    ],
    "answer": "Fall - Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the name of the Nigerian artist with the hit 'Joro'?",
    "options": [
      "Wizkid",
      "Funke Akindele",
      "Try Me",
      "Adedamola Adefolahan"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist released the EP 'Rema'?",
    "options": [
      "Rema",
      "Afrofusion",
      "Ycee",
      "Africa Magic Viewers\u2019 Choice Awards"
    ],
    "answer": "Rema"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What does 'Zanku' mean in Nigerian pop culture?",
    "options": [
      "Legwork dance style",
      "Mr Macaroni",
      "Hilda Baci",
      "Tingg"
    ],
    "answer": "Legwork dance style"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which social media app made many Nigerian comedians go viral?",
    "options": [
      "Africa Magic Viewers\u2019 Choice Awards",
      "Burna Boy",
      "Broda Shaggi",
      "Instagram"
    ],
    "answer": "Instagram"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is known for the comedy series 'Back to School'?",
    "options": [
      "Africa Magic Viewers\u2019 Choice Awards",
      "The Headies Awards",
      "Rema",
      "Broda Shaggi"
    ],
    "answer": "Broda Shaggi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the real name of Nigerian singer Fireboy DML?",
    "options": [
      "Tingg",
      "Mercy Eke",
      "Instagram",
      "Adedamola Adefolahan"
    ],
    "answer": "Adedamola Adefolahan"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist is associated with the 'YBNL' label?",
    "options": [
      "Funke Akindele",
      "Burna Boy",
      "Olamide",
      "Ebuka Obi-Uchendu"
    ],
    "answer": "Olamide"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the title of Tems' breakout song?",
    "options": [
      "Mavin Records",
      "Davido",
      "Try Me",
      "Modern Nigerian woman\u2019s life"
    ],
    "answer": "Try Me"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who won Big Brother Naija Season 4?",
    "options": [
      "Burna Boy",
      "Wizkid",
      "Modern Nigerian woman\u2019s life",
      "Mercy Eke"
    ],
    "answer": "Mercy Eke"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist is known for blending Highlife and Afrobeats?",
    "options": [
      "Flavour",
      "Ycee",
      "Try Me",
      "Davido"
    ],
    "answer": "Flavour"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is known as the 'African Giant'?",
    "options": [
      "P-Square",
      "Ycee",
      "The Nancy Isime Show",
      "Burna Boy"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which popular Nigerian dance involves moving your arms in a criss-cross manner?",
    "options": [
      "Shaku Shaku",
      "Modern Nigerian woman\u2019s life",
      "Burna Boy",
      "Adedamola Adefolahan"
    ],
    "answer": "Shaku Shaku"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the profession of DJ Neptune?",
    "options": [
      "Rema",
      "Try Me",
      "Disc Jockey",
      "Ycee"
    ],
    "answer": "Disc Jockey"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian fashion influencer is also a model and YouTuber?",
    "options": [
      "Legwork dance style",
      "Fall - Davido",
      "Rema",
      "Temi Otedola"
    ],
    "answer": "Temi Otedola"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian actress is known for her role in 'Jenifa\u2019s Diary'?",
    "options": [
      "Disc Jockey",
      "Funke Akindele",
      "Shaku Shaku",
      "Instagram"
    ],
    "answer": "Funke Akindele"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who created the comedy character 'Mama Tobi'?",
    "options": [
      "Oluwakaponeski",
      "Davido",
      "Adedamola Adefolahan",
      "Disc Jockey"
    ],
    "answer": "Oluwakaponeski"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian song trended globally on TikTok in 2022?",
    "options": [
      "Oluwakaponeski",
      "Calm Down - Rema",
      "Africa Magic",
      "Instagram"
    ],
    "answer": "Calm Down - Rema"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian rapper is known for the track 'Jagaban'?",
    "options": [
      "Tingg",
      "Dorcas Shola Fapson",
      "Ycee",
      "Ebuka Obi-Uchendu"
    ],
    "answer": "Ycee"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian music group was made up of Peter and Paul Okoye?",
    "options": [
      "P-Square",
      "Mercy Eke",
      "Wizkid",
      "Africa Magic Viewers\u2019 Choice Awards"
    ],
    "answer": "P-Square"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the name of the music award organised by The Headies?",
    "options": [
      "Rema",
      "The Headies Awards",
      "Legwork dance style",
      "Oluwakaponeski"
    ],
    "answer": "The Headies Awards"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which singer became popular for his song 'If I No Get Money Wetin I Gain'?",
    "options": [
      "Shaku Shaku",
      "Temi Otedola",
      "Victor AD",
      "Olamide"
    ],
    "answer": "Victor AD"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian actress starred in the series 'Shuga Naija'?",
    "options": [
      "Davido",
      "Mavin Records",
      "Dorcas Shola Fapson",
      "Modern Nigerian woman\u2019s life"
    ],
    "answer": "Dorcas Shola Fapson"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the main theme of 'Skinny Girl in Transit'?",
    "options": [
      "Disc Jockey",
      "Modern Nigerian woman\u2019s life",
      "Shaku Shaku",
      "Legwork dance style"
    ],
    "answer": "Modern Nigerian woman\u2019s life"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which music genre blends hip-hop with Afrobeats?",
    "options": [
      "Afrofusion",
      "Olamide",
      "Ebuka Obi-Uchendu",
      "Broda Shaggi"
    ],
    "answer": "Afrofusion"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian music label is known for stars like Ayra Starr and Rema?",
    "options": [
      "The Headies Awards",
      "Olamide",
      "Mavin Records",
      "Afrofusion"
    ],
    "answer": "Mavin Records"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which TV host is famous for fashion at award shows in Nigeria?",
    "options": [
      "Hilda Baci",
      "Africa Magic Viewers\u2019 Choice Awards",
      "Ebuka Obi-Uchendu",
      "Flavour"
    ],
    "answer": "Ebuka Obi-Uchendu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian celebrity chef became famous through Instagram?",
    "options": [
      "Burna Boy",
      "Wizkid",
      "Mercy Eke",
      "Hilda Baci"
    ],
    "answer": "Hilda Baci"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What\u2019s the name of the pop culture show hosted by Nancy Isime?",
    "options": [
      "Wizkid",
      "Disc Jockey",
      "The Nancy Isime Show",
      "Afrofusion"
    ],
    "answer": "The Nancy Isime Show"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian comedian is known for playing 'Lawyer Kunle'?",
    "options": [
      "Mr Macaroni",
      "Adedamola Adefolahan",
      "Shaku Shaku",
      "Legwork dance style"
    ],
    "answer": "Mr Macaroni"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is known for the Nigerian track 'Kilometre'?",
    "options": [
      "Burna Boy",
      "The Nancy Isime Show",
      "Calm Down - Rema",
      "Tingg"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian social media app supports local content creators?",
    "options": [
      "Ebuka Obi-Uchendu",
      "Victor AD",
      "Oluwakaponeski",
      "Tingg"
    ],
    "answer": "Tingg"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Lagos-based event celebrates pop culture, comics and gaming?",
    "options": [
      "Comic Connect Africa",
      "Tingg",
      "Rema",
      "Legwork dance style"
    ],
    "answer": "Comic Connect Africa"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist is nicknamed 'OBO'?",
    "options": [
      "Dorcas Shola Fapson",
      "Davido",
      "Ycee",
      "The Nancy Isime Show"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What does AMVCA stand for in Nigerian pop culture?",
    "options": [
      "Burna Boy",
      "Davido",
      "Africa Magic Viewers\u2019 Choice Awards",
      "Dorcas Shola Fapson"
    ],
    "answer": "Africa Magic Viewers\u2019 Choice Awards"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist's debut album is 'Superstar'?",
    "options": [
      "Shaku Shaku",
      "P-Square",
      "Wizkid",
      "The Nancy Isime Show"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the name of the Nigerian TV station that airs Big Brother Naija?",
    "options": [
      "Wizkid",
      "Comic Connect Africa",
      "Africa Magic",
      "Mr Macaroni"
    ],
    "answer": "Africa Magic"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is the host of Big Brother Naija?",
    "options": [
      "Mavin Records",
      "Tingg",
      "Ebuka Obi-Uchendu",
      "Hilda Baci"
    ],
    "answer": "Ebuka Obi-Uchendu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian actress starred in the film 'The Wedding Party'?",
    "options": [
      "Adesua Etomi",
      "Instagram",
      "P-Square",
      "Olamide"
    ],
    "answer": "Adesua Etomi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian song starts with 'She tell me say'?",
    "options": [
      "Mavin Records",
      "Wizkid",
      "Adesua Etomi",
      "Fall - Davido"
    ],
    "answer": "Fall - Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the name of the Nigerian artist with the hit 'Joro'?",
    "options": [
      "Mr Macaroni",
      "Legwork dance style",
      "Rema",
      "Wizkid"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist released the EP 'Rema'?",
    "options": [
      "Legwork dance style",
      "Rema",
      "Hilda Baci",
      "Victor AD"
    ],
    "answer": "Rema"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What does 'Zanku' mean in Nigerian pop culture?",
    "options": [
      "Africa Magic Viewers\u2019 Choice Awards",
      "Flavour",
      "Wizkid",
      "Legwork dance style"
    ],
    "answer": "Legwork dance style"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which social media app made many Nigerian comedians go viral?",
    "options": [
      "Ebuka Obi-Uchendu",
      "Temi Otedola",
      "Funke Akindele",
      "Instagram"
    ],
    "answer": "Instagram"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is known for the comedy series 'Back to School'?",
    "options": [
      "Calm Down - Rema",
      "P-Square",
      "Legwork dance style",
      "Broda Shaggi"
    ],
    "answer": "Broda Shaggi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the real name of Nigerian singer Fireboy DML?",
    "options": [
      "P-Square",
      "Funke Akindele",
      "Adesua Etomi",
      "Adedamola Adefolahan"
    ],
    "answer": "Adedamola Adefolahan"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist is associated with the 'YBNL' label?",
    "options": [
      "Disc Jockey",
      "Olamide",
      "Ebuka Obi-Uchendu",
      "Africa Magic"
    ],
    "answer": "Olamide"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the title of Tems' breakout song?",
    "options": [
      "Temi Otedola",
      "Try Me",
      "Africa Magic",
      "Legwork dance style"
    ],
    "answer": "Try Me"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who won Big Brother Naija Season 4?",
    "options": [
      "Mercy Eke",
      "Africa Magic",
      "Fall - Davido",
      "Burna Boy"
    ],
    "answer": "Mercy Eke"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian artist is known for blending Highlife and Afrobeats?",
    "options": [
      "Flavour",
      "Rema",
      "Wizkid",
      "Instagram"
    ],
    "answer": "Flavour"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is known as the 'African Giant'?",
    "options": [
      "Dorcas Shola Fapson",
      "Ebuka Obi-Uchendu",
      "Victor AD",
      "Burna Boy"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which popular Nigerian dance involves moving your arms in a criss-cross manner?",
    "options": [
      "Hilda Baci",
      "Africa Magic",
      "Shaku Shaku",
      "Africa Magic Viewers\u2019 Choice Awards"
    ],
    "answer": "Shaku Shaku"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the profession of DJ Neptune?",
    "options": [
      "Instagram",
      "Disc Jockey",
      "Ebuka Obi-Uchendu",
      "Legwork dance style"
    ],
    "answer": "Disc Jockey"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian fashion influencer is also a model and YouTuber?",
    "options": [
      "Tingg",
      "Ebuka Obi-Uchendu",
      "Olamide",
      "Temi Otedola"
    ],
    "answer": "Temi Otedola"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian actress is known for her role in 'Jenifa\u2019s Diary'?",
    "options": [
      "Oluwakaponeski",
      "Dorcas Shola Fapson",
      "Funke Akindele",
      "Fall - Davido"
    ],
    "answer": "Funke Akindele"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who created the comedy character 'Mama Tobi'?",
    "options": [
      "Ebuka Obi-Uchendu",
      "Hilda Baci",
      "Dorcas Shola Fapson",
      "Oluwakaponeski"
    ],
    "answer": "Oluwakaponeski"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian song trended globally on TikTok in 2022?",
    "options": [
      "Mavin Records",
      "The Nancy Isime Show",
      "Calm Down - Rema",
      "Fall - Davido"
    ],
    "answer": "Calm Down - Rema"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian rapper is known for the track 'Jagaban'?",
    "options": [
      "Comic Connect Africa",
      "Broda Shaggi",
      "Ycee",
      "Africa Magic"
    ],
    "answer": "Ycee"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian music group was made up of Peter and Paul Okoye?",
    "options": [
      "Adedamola Adefolahan",
      "Funke Akindele",
      "P-Square",
      "Mavin Records"
    ],
    "answer": "P-Square"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the name of the music award organised by The Headies?",
    "options": [
      "The Headies Awards",
      "Oluwakaponeski",
      "Victor AD",
      "Temi Otedola"
    ],
    "answer": "The Headies Awards"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which singer became popular for his song 'If I No Get Money Wetin I Gain'?",
    "options": [
      "Victor AD",
      "Wizkid",
      "Africa Magic Viewers\u2019 Choice Awards",
      "Broda Shaggi"
    ],
    "answer": "Victor AD"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian actress starred in the series 'Shuga Naija'?",
    "options": [
      "Ebuka Obi-Uchendu",
      "Wizkid",
      "Temi Otedola",
      "Dorcas Shola Fapson"
    ],
    "answer": "Dorcas Shola Fapson"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What is the main theme of 'Skinny Girl in Transit'?",
    "options": [
      "Burna Boy",
      "Modern Nigerian woman\u2019s life",
      "Broda Shaggi",
      "The Headies Awards"
    ],
    "answer": "Modern Nigerian woman\u2019s life"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which music genre blends hip-hop with Afrobeats?",
    "options": [
      "Burna Boy",
      "Olamide",
      "Afrofusion",
      "Victor AD"
    ],
    "answer": "Afrofusion"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian music label is known for stars like Ayra Starr and Rema?",
    "options": [
      "Ebuka Obi-Uchendu",
      "Victor AD",
      "Adedamola Adefolahan",
      "Mavin Records"
    ],
    "answer": "Mavin Records"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which TV host is famous for fashion at award shows in Nigeria?",
    "options": [
      "Ebuka Obi-Uchendu",
      "Try Me",
      "Africa Magic Viewers\u2019 Choice Awards",
      "Temi Otedola"
    ],
    "answer": "Ebuka Obi-Uchendu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian celebrity chef became famous through Instagram?",
    "options": [
      "Hilda Baci",
      "Disc Jockey",
      "Victor AD",
      "P-Square"
    ],
    "answer": "Hilda Baci"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "What\u2019s the name of the pop culture show hosted by Nancy Isime?",
    "options": [
      "Mercy Eke",
      "The Nancy Isime Show",
      "Calm Down - Rema",
      "Rema"
    ],
    "answer": "The Nancy Isime Show"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian comedian is known for playing 'Lawyer Kunle'?",
    "options": [
      "Burna Boy",
      "Flavour",
      "Mr Macaroni",
      "Adesua Etomi"
    ],
    "answer": "Mr Macaroni"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Who is known for the Nigerian track 'Kilometre'?",
    "options": [
      "Burna Boy",
      "Oluwakaponeski",
      "Hilda Baci",
      "P-Square"
    ],
    "answer": "Burna Boy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Nigerian social media app supports local content creators?",
    "options": [
      "Tingg",
      "Adedamola Adefolahan",
      "Calm Down - Rema",
      "Rema"
    ],
    "answer": "Tingg"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Medium",
    "question": "Which Lagos-based event celebrates pop culture, comics and gaming?",
    "options": [
      "Africa Magic Viewers\u2019 Choice Awards",
      "Dorcas Shola Fapson",
      "Funke Akindele",
      "Comic Connect Africa"
    ],
    "answer": "Comic Connect Africa"
  },

  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who sang the song 'Fem'?",
    "options": [
      "P-Square",
      "Fireboy DML",
      "Davido",
      "The Wedding Party"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the name of the reality TV show featuring Nigerian housemates?",
    "options": [
      "Funke Akindele",
      "Olamilekan Agbeleshe",
      "Big Brother Naija",
      "Rema"
    ],
    "answer": "Big Brother Naija"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is known as 'Starboy'?",
    "options": [
      "Wizkid",
      "Jenifa\u2019s Diary",
      "Funke Akindele",
      "Davido"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian song is known for the phrase 'This your body dey gbadun me'?",
    "options": [
      "Davido",
      "Joro - Wizkid",
      "Bella Shmurda",
      "P-Square"
    ],
    "answer": "Joro - Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the full name of BBNaija star Laycon?",
    "options": [
      "Olamilekan Agbeleshe",
      "DJ Cuppy",
      "The Nancy Isime Show",
      "Tekno"
    ],
    "answer": "Olamilekan Agbeleshe"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian actress played 'Jenifa'?",
    "options": [
      "Baddo",
      "The Nancy Isime Show",
      "Funke Akindele",
      "Sola Sobowale"
    ],
    "answer": "Funke Akindele"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the stage name of Adedamola Adefolahan?",
    "options": [
      "Zanku",
      "Jenifa\u2019s Diary",
      "Fireboy DML",
      "Oniyide Azeez"
    ],
    "answer": "Fireboy DML"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which artist sang 'Risky'?",
    "options": [
      "Lasisi Elenu",
      "Davido",
      "Baddo",
      "Zanku"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the nickname of Olamide?",
    "options": [
      "Baddo",
      "Zanku",
      "iROKOtv",
      "Big Brother Naija"
    ],
    "answer": "Baddo"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is the daughter of Femi Otedola and a famous DJ?",
    "options": [
      "The Wedding Party",
      "DJ Cuppy",
      "Joro - Wizkid",
      "Rema"
    ],
    "answer": "DJ Cuppy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of the music app popular among Nigerian youth?",
    "options": [
      "Boomplay",
      "P-Square",
      "Rema",
      "Bella Shmurda"
    ],
    "answer": "Boomplay"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who featured in the song 'High' with Adekunle Gold?",
    "options": [
      "Davido",
      "Joro - Wizkid",
      "Olamilekan Agbeleshe",
      "Niniola"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist is known for the track 'Pana'?",
    "options": [
      "Joro - Wizkid",
      "Tekno",
      "Taaooma",
      "Niniola"
    ],
    "answer": "Tekno"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the real name of the artist 'Kizz Daniel'?",
    "options": [
      "Funke Akindele",
      "Olamilekan Agbeleshe",
      "Oluwatobiloba Anidugbe",
      "Kizz Daniel"
    ],
    "answer": "Oluwatobiloba Anidugbe"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist released the song 'Soco'?",
    "options": [
      "Olamilekan Agbeleshe",
      "Wizkid",
      "Oluwatobiloba Anidugbe",
      "Zanku"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of Davido\u2019s record label?",
    "options": [
      "The Nancy Isime Show",
      "Jenifa\u2019s Diary",
      "Taaooma",
      "DMW"
    ],
    "answer": "DMW"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist released the song 'Jaho'?",
    "options": [
      "Baddo",
      "Kizz Daniel",
      "Sola Sobowale",
      "DMW"
    ],
    "answer": "Kizz Daniel"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is the lead actor in 'King of Boys'?",
    "options": [
      "Big Brother Naija",
      "Tekno",
      "Sola Sobowale",
      "Love Nwantiti"
    ],
    "answer": "Sola Sobowale"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What music duo was once made up of twin brothers?",
    "options": [
      "Rema",
      "Love Nwantiti",
      "P-Square",
      "I no get shishi"
    ],
    "answer": "P-Square"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which singer is known for the hit 'Duduke'?",
    "options": [
      "Jenifa\u2019s Diary",
      "Zanku",
      "DMW",
      "Simi"
    ],
    "answer": "Simi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of the TV show by Funke Akindele?",
    "options": [
      "Twice As Tall",
      "Jam",
      "Boomplay",
      "Jenifa\u2019s Diary"
    ],
    "answer": "Jenifa\u2019s Diary"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist is famous for his comic skits as a 'sugar daddy'?",
    "options": [
      "Davido",
      "I no get shishi",
      "Kizz Daniel",
      "Mr Macaroni"
    ],
    "answer": "Mr Macaroni"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What popular Nigerian movie tells the story of a party wedding?",
    "options": [
      "Oniyide Azeez",
      "Niniola",
      "iROKOtv",
      "The Wedding Party"
    ],
    "answer": "The Wedding Party"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the stage name of Divine Ikubor?",
    "options": [
      "Mr Macaroni",
      "Olamilekan Agbeleshe",
      "Baddo",
      "Rema"
    ],
    "answer": "Rema"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the hit song by CKay that went viral globally?",
    "options": [
      "Love Nwantiti",
      "Joro - Wizkid",
      "The Nancy Isime Show",
      "Lasisi Elenu"
    ],
    "answer": "Love Nwantiti"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist is also known as 'African Bad Gyal'?",
    "options": [
      "DMW",
      "Tiwa Savage",
      "The Wedding Party",
      "Davido"
    ],
    "answer": "Tiwa Savage"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What platform is famous for streaming Nigerian movies?",
    "options": [
      "Mr Macaroni",
      "iROKOtv",
      "Taaooma",
      "DJ Cuppy"
    ],
    "answer": "iROKOtv"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the nickname of Tems' fans?",
    "options": [
      "Rebel Gang",
      "Wizkid",
      "Mr Macaroni",
      "The Wedding Party"
    ],
    "answer": "Rebel Gang"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the title of Burna Boy\u2019s 2020 Grammy-winning album?",
    "options": [
      "Boomplay",
      "Twice As Tall",
      "The Nancy Isime Show",
      "Lasisi Elenu"
    ],
    "answer": "Twice As Tall"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the slang used by Nigerians to describe 'danceable music'?",
    "options": [
      "Jam",
      "Rema",
      "P-Square",
      "Taaooma"
    ],
    "answer": "Jam"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is the comedian known for 'Motunde' skits?",
    "options": [
      "P-Square",
      "Taaooma",
      "Tekno",
      "Lasisi Elenu"
    ],
    "answer": "Taaooma"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the name of the Nigerian artist with the stage name 'Zinoleesky'?",
    "options": [
      "Niniola",
      "P-Square",
      "Kizz Daniel",
      "Oniyide Azeez"
    ],
    "answer": "Oniyide Azeez"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the Nigerian dance style made popular by Poco Lee?",
    "options": [
      "Boomplay",
      "DMW",
      "Zanku",
      "Rema"
    ],
    "answer": "Zanku"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian comedian uses the tagline 'You are doing well'?",
    "options": [
      "Lasisi Elenu",
      "Boomplay",
      "Kizz Daniel",
      "iROKOtv"
    ],
    "answer": "Lasisi Elenu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who sang the hit song 'Cash App'?",
    "options": [
      "I no get shishi",
      "Big Brother Naija",
      "Bella Shmurda",
      "Wizkid"
    ],
    "answer": "Bella Shmurda"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What slang means 'I'm broke' in Nigerian pop culture?",
    "options": [
      "Kizz Daniel",
      "I no get shishi",
      "Wizkid",
      "Tekno"
    ],
    "answer": "I no get shishi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the name of Teni\u2019s sister who is also a singer?",
    "options": [
      "Niniola",
      "Mr Macaroni",
      "Davido",
      "Baddo"
    ],
    "answer": "Niniola"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of the hit show hosted by Nancy Isime?",
    "options": [
      "P-Square",
      "Big Brother Naija",
      "The Nancy Isime Show",
      "Taaooma"
    ],
    "answer": "The Nancy Isime Show"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which popular Nigerian duo performed the hit song 'Do Me'?",
    "options": [
      "Zanku",
      "Mr Macaroni",
      "P-Square",
      "DJ Cuppy"
    ],
    "answer": "P-Square"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who sang the song 'Fem'?",
    "options": [
      "Boomplay",
      "Tekno",
      "Joro - Wizkid",
      "Davido"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the name of the reality TV show featuring Nigerian housemates?",
    "options": [
      "Big Brother Naija",
      "P-Square",
      "Tekno",
      "DMW"
    ],
    "answer": "Big Brother Naija"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is known as 'Starboy'?",
    "options": [
      "I no get shishi",
      "Joro - Wizkid",
      "Wizkid",
      "iROKOtv"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian song is known for the phrase 'This your body dey gbadun me'?",
    "options": [
      "iROKOtv",
      "Mr Macaroni",
      "Joro - Wizkid",
      "Tekno"
    ],
    "answer": "Joro - Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the full name of BBNaija star Laycon?",
    "options": [
      "Mr Macaroni",
      "DMW",
      "Olamilekan Agbeleshe",
      "Kizz Daniel"
    ],
    "answer": "Olamilekan Agbeleshe"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian actress played 'Jenifa'?",
    "options": [
      "Tekno",
      "iROKOtv",
      "Funke Akindele",
      "Niniola"
    ],
    "answer": "Funke Akindele"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the stage name of Adedamola Adefolahan?",
    "options": [
      "The Nancy Isime Show",
      "P-Square",
      "Fireboy DML",
      "Oluwatobiloba Anidugbe"
    ],
    "answer": "Fireboy DML"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which artist sang 'Risky'?",
    "options": [
      "I no get shishi",
      "Big Brother Naija",
      "Davido",
      "Mr Macaroni"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the nickname of Olamide?",
    "options": [
      "Boomplay",
      "Oluwatobiloba Anidugbe",
      "Baddo",
      "P-Square"
    ],
    "answer": "Baddo"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is the daughter of Femi Otedola and a famous DJ?",
    "options": [
      "Davido",
      "Boomplay",
      "DJ Cuppy",
      "Zanku"
    ],
    "answer": "DJ Cuppy"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of the music app popular among Nigerian youth?",
    "options": [
      "Davido",
      "Sola Sobowale",
      "Mr Macaroni",
      "Boomplay"
    ],
    "answer": "Boomplay"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who featured in the song 'High' with Adekunle Gold?",
    "options": [
      "Simi",
      "Davido",
      "Olamilekan Agbeleshe",
      "Rebel Gang"
    ],
    "answer": "Davido"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist is known for the track 'Pana'?",
    "options": [
      "Bella Shmurda",
      "Tiwa Savage",
      "Tekno",
      "P-Square"
    ],
    "answer": "Tekno"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the real name of the artist 'Kizz Daniel'?",
    "options": [
      "Oluwatobiloba Anidugbe",
      "Baddo",
      "Niniola",
      "The Nancy Isime Show"
    ],
    "answer": "Oluwatobiloba Anidugbe"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist released the song 'Soco'?",
    "options": [
      "Simi",
      "Tekno",
      "Twice As Tall",
      "Wizkid"
    ],
    "answer": "Wizkid"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of Davido\u2019s record label?",
    "options": [
      "Lasisi Elenu",
      "Oluwatobiloba Anidugbe",
      "DMW",
      "Twice As Tall"
    ],
    "answer": "DMW"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist released the song 'Jaho'?",
    "options": [
      "Kizz Daniel",
      "Fireboy DML",
      "Tekno",
      "Big Brother Naija"
    ],
    "answer": "Kizz Daniel"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is the lead actor in 'King of Boys'?",
    "options": [
      "Oniyide Azeez",
      "Funke Akindele",
      "Sola Sobowale",
      "I no get shishi"
    ],
    "answer": "Sola Sobowale"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What music duo was once made up of twin brothers?",
    "options": [
      "Oluwatobiloba Anidugbe",
      "I no get shishi",
      "Davido",
      "P-Square"
    ],
    "answer": "P-Square"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which singer is known for the hit 'Duduke'?",
    "options": [
      "Bella Shmurda",
      "Simi",
      "Jenifa\u2019s Diary",
      "Kizz Daniel"
    ],
    "answer": "Simi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of the TV show by Funke Akindele?",
    "options": [
      "Rebel Gang",
      "Baddo",
      "Jenifa\u2019s Diary",
      "Niniola"
    ],
    "answer": "Jenifa\u2019s Diary"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist is famous for his comic skits as a 'sugar daddy'?",
    "options": [
      "Bella Shmurda",
      "Mr Macaroni",
      "Oniyide Azeez",
      "DJ Cuppy"
    ],
    "answer": "Mr Macaroni"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What popular Nigerian movie tells the story of a party wedding?",
    "options": [
      "Lasisi Elenu",
      "Simi",
      "Big Brother Naija",
      "The Wedding Party"
    ],
    "answer": "The Wedding Party"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the stage name of Divine Ikubor?",
    "options": [
      "Joro - Wizkid",
      "Rema",
      "Big Brother Naija",
      "Niniola"
    ],
    "answer": "Rema"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the hit song by CKay that went viral globally?",
    "options": [
      "Wizkid",
      "The Nancy Isime Show",
      "Love Nwantiti",
      "Funke Akindele"
    ],
    "answer": "Love Nwantiti"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian artist is also known as 'African Bad Gyal'?",
    "options": [
      "Joro - Wizkid",
      "Tiwa Savage",
      "The Wedding Party",
      "Simi"
    ],
    "answer": "Tiwa Savage"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What platform is famous for streaming Nigerian movies?",
    "options": [
      "Bella Shmurda",
      "iROKOtv",
      "Oluwatobiloba Anidugbe",
      "Zanku"
    ],
    "answer": "iROKOtv"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the nickname of Tems' fans?",
    "options": [
      "Oluwatobiloba Anidugbe",
      "Mr Macaroni",
      "Rebel Gang",
      "Olamilekan Agbeleshe"
    ],
    "answer": "Rebel Gang"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the title of Burna Boy\u2019s 2020 Grammy-winning album?",
    "options": [
      "Baddo",
      "Twice As Tall",
      "Tiwa Savage",
      "Big Brother Naija"
    ],
    "answer": "Twice As Tall"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the slang used by Nigerians to describe 'danceable music'?",
    "options": [
      "Oluwatobiloba Anidugbe",
      "I no get shishi",
      "Bella Shmurda",
      "Jam"
    ],
    "answer": "Jam"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who is the comedian known for 'Motunde' skits?",
    "options": [
      "Davido",
      "Kizz Daniel",
      "Taaooma",
      "Funke Akindele"
    ],
    "answer": "Taaooma"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the name of the Nigerian artist with the stage name 'Zinoleesky'?",
    "options": [
      "Wizkid",
      "Oniyide Azeez",
      "Baddo",
      "Jam"
    ],
    "answer": "Oniyide Azeez"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the Nigerian dance style made popular by Poco Lee?",
    "options": [
      "Zanku",
      "Mr Macaroni",
      "Davido",
      "P-Square"
    ],
    "answer": "Zanku"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which Nigerian comedian uses the tagline 'You are doing well'?",
    "options": [
      "Zanku",
      "Lasisi Elenu",
      "The Wedding Party",
      "DJ Cuppy"
    ],
    "answer": "Lasisi Elenu"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Who sang the hit song 'Cash App'?",
    "options": [
      "Tekno",
      "Joro - Wizkid",
      "Jenifa\u2019s Diary",
      "Bella Shmurda"
    ],
    "answer": "Bella Shmurda"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What slang means 'I'm broke' in Nigerian pop culture?",
    "options": [
      "Jam",
      "I no get shishi",
      "The Wedding Party",
      "Sola Sobowale"
    ],
    "answer": "I no get shishi"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What is the name of Teni\u2019s sister who is also a singer?",
    "options": [
      "Jenifa\u2019s Diary",
      "Niniola",
      "Rebel Gang",
      "DJ Cuppy"
    ],
    "answer": "Niniola"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "What\u2019s the name of the hit show hosted by Nancy Isime?",
    "options": [
      "The Nancy Isime Show",
      "Joro - Wizkid",
      "Tiwa Savage",
      "Bella Shmurda"
    ],
    "answer": "The Nancy Isime Show"
  },
  {
    "category": "Pop Culture",
    "difficulty": "Easy",
    "question": "Which popular Nigerian duo performed the hit song 'Do Me'?",
    "options": [
      "Kizz Daniel",
      "Jenifa\u2019s Diary",
      "P-Square",
      "Davido"
    ],
    "answer": "P-Square"
  },















































  {
    category: "Food",
    difficulty: "Easy",
    question: "Which Nigerian soup is made with melon seeds?",
    options: ["Ogbono", "Egusi", "Afang", "Ewedu"],
    answer: "Egusi"
  },

  {
    category: "Food",
    difficulty: "Easy",
    question: "What is 'Ofada' rice usually served with?",
    options: ["Fried egg", "Stew with assorted meat", "Palm oil", "Pepper soup"],
    answer: "Stew with assorted meat"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "Which Nigerian meal is made from pounded yam and vegetable soup?",
    options: ["Tuwo Shinkafa", "Eba", "Amala", "Pounded Yam and Egusi"],
    answer: "Pounded Yam and Egusi"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "Which meal is common in the northern part of Nigeria?",
    options: ["Tuwo Shinkafa", "Moi Moi", "Efo Riro", "Yam Porridge"],
    answer: "Tuwo Shinkafa"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What is a major ingredient in 'Ogbono' soup?",
    options: ["Okra", "Melon seed", "Bush mango seed", "Palm oil"],
    answer: "Bush mango seed"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "Which soup originates from the Yoruba culture?",
    options: ["Afang", "Ewedu", "Atama", "Oha"],
    answer: "Ewedu"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What food is made by frying blended beans?",
    options: ["Akara", "Moi Moi", "Ekuru", "Kuli Kuli"],
    answer: "Akara"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What is ‘Nkwobi’ made from?",
    options: ["Snail", "Goat meat", "Cow foot", "Stock fish"],
    answer: "Cow foot"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "Which drink is made from fermented corn?",
    options: ["Palm wine", "Zobo", "Kunu", "Fura"],
    answer: "Kunu"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What soup is famous among the Efik?",
    options: ["Ogbono", "Afang", "Efo Riro", "Nsala"],
    answer: "Afang"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "Which soup uses okra as the main ingredient?",
    options: ["Afang", "Ewedu", "Ogbono", "Okra"],
    answer: "Okra"
  },
 
  {
    category: "Food",
    difficulty: "Easy",
    question: "What is the primary ingredient in Moi Moi?",
    options: ["Cassava", "Beans", "Yam", "Plantain"],
    answer: "Beans"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What soup is popular among the Efik people?",
    options: ["Egusi", "Efo Riro", "Afang", "Ogbono"],
    answer: "Afang"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "Which food is commonly eaten with Egusi soup?",
    options: ["Jollof rice", "Pounded yam", "Akara", "Plantain"],
    answer: "Pounded yam"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What is Suya?",
    options: ["Grilled meat", "Stewed beans", "Fried plantain", "Rice dish"],
    answer: "Grilled meat"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What is Suya?",
    options: ["Grilled meat", "Stewed beans", "Fried plantain", "Rice dish"],
    answer: "Grilled meat"
  },
  {
    category: "Food",
    difficulty: "Easy",
    question: "What soup is popular among the Efik people?",
    options: ["Egusi", "Efo Riro", "Afang", "Ogbono"],
    answer: "Afang"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "What is the primary ingredient in Moi Moi?",
    options: ["Cassava", "Beans", "Yam", "Plantain"],
    answer: "Beans"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "What is the primary ingredient in Moi Moi?",
    options: ["Cassava", "Beans", "Yam", "Plantain"],
    answer: "Beans"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "What is Suya?",
    options: ["Grilled meat", "Stewed beans", "Fried plantain", "Rice dish"],
    answer: "Grilled meat"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "What is the primary ingredient in Moi Moi?",
    options: ["Cassava", "Beans", "Yam", "Plantain"],
    answer: "Beans"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "Which food is commonly eaten with Egusi soup?",
    options: ["Jollof rice", "Pounded yam", "Akara", "Plantain"],
    answer: "Pounded yam"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "Which Nigerian soup is made with melon seeds?",
    options: ["Ogbono", "Egusi", "Afang", "Ewedu"],
    answer: "Egusi"
  },
  {
    category: "Food",
    difficulty: "Medium",
    question: "Which food is commonly eaten with Egusi soup?",
    options: ["Jollof rice", "Pounded yam", "Akara", "Plantain"],
    answer: "Pounded yam"
  },
  {
    category: "Food",
    difficulty: "Hard",
    question: "What is Suya?",
    options: ["Grilled meat", "Stewed beans", "Fried plantain", "Rice dish"],
    answer: "Grilled meat"
  },
  {
    category: "Food",
    difficulty: "Hard",
    question: "Which Nigerian soup is made with melon seeds?",
    options: ["Ogbono", "Egusi", "Afang", "Ewedu"],
    answer: "Egusi"
  },
  {
    category: "Food",
    difficulty: "Hard",
    question: "What is Suya?",
    options: ["Grilled meat", "Stewed beans", "Fried plantain", "Rice dish"],
    answer: "Grilled meat"
  },
  {
    category: "Food",
    difficulty: "Hard",
    question: "Which Nigerian soup is made with melon seeds?",
    options: ["Ogbono", "Egusi", "Afang", "Ewedu"],
    answer: "Egusi"
  },
  {
    category: "Food",
    difficulty: "Hard",
    question: "Which Nigerian soup is made with melon seeds?",
    options: ["Ogbono", "Egusi", "Afang", "Ewedu"],
    answer: "Egusi"
  },
  {
    category: "Food",
    difficulty: "Hard",
    question: "What soup is popular among the Efik people?",
    options: ["Egusi", "Efo Riro", "Afang", "Ogbono"],
    answer: "Afang"
  },



  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the traditional Yoruba soup made with fermented locust beans and melon seeds called?",
    "options": [
      "Delta",
      "Gbegiri",
      "Ground peeled beans",
      "Ji Abubo"
    ],
    "answer": "Gbegiri"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which Nigerian dish is made from ground African yam beans and steamed in leaves?",
    "options": [
      "Yam pepper soup with goat meat",
      "Agidi",
      "Ekuru",
      "Boli"
    ],
    "answer": "Ekuru"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the staple food in Tiv traditional meals?",
    "options": [
      "Abacha",
      "Pounded yam",
      "Cassava starch",
      "Dawadawa"
    ],
    "answer": "Pounded yam"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe is known for the dish 'Tuwo Shinkafa'?",
    "options": [
      "Ji Abubo",
      "Waterleaf and Okazi leaf",
      "Hausa",
      "Sun-drying spiced beef"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Ukodo' in Urhobo cuisine?",
    "options": [
      "Amala",
      "Vernonia amygdalina",
      "Yam pepper soup with goat meat",
      "Fermented seasoning"
    ],
    "answer": "Yam pepper soup with goat meat"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which region in Nigeria is known for 'Ofe Nsala'?",
    "options": [
      "Southeast",
      "Egusi oil",
      "Ofe Akwu",
      "Ji Abubo"
    ],
    "answer": "Southeast"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the main ingredient in 'Banga Soup'?",
    "options": [
      "Waterleaf and Okazi leaf",
      "Palm fruit extract",
      "Yam pepper soup with goat meat",
      "Fermented seasoning"
    ],
    "answer": "Palm fruit extract"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe traditionally prepares 'Miyan Kuka'?",
    "options": [
      "Hausa",
      "Moi Moi",
      "Egusi oil",
      "Guinea corn flour"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the Nigerian delicacy 'Afang Soup' made from?",
    "options": [
      "Ji Abubo",
      "Edikaikong",
      "Hausa",
      "Waterleaf and Okazi leaf"
    ],
    "answer": "Waterleaf and Okazi leaf"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which ethnic group prepares 'Edikaikong'?",
    "options": [
      "Ijaw",
      "Ofe Akwu",
      "Sun-drying spiced beef",
      "Efik/Ibibio"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the primary leaf used in making 'Bitterleaf Soup'?",
    "options": [
      "Vernonia amygdalina",
      "Abacha",
      "Edikaikong",
      "Agidi"
    ],
    "answer": "Vernonia amygdalina"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe is associated with 'Ofada rice' and sauce?",
    "options": [
      "Kunu",
      "Cow foot",
      "Fermented seasoning",
      "Yoruba"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which rare Nigerian food is made from grated cassava and served like couscous?",
    "options": [
      "Efik/Ibibio",
      "Ijaw",
      "Abacha",
      "Guinea corn flour"
    ],
    "answer": "Abacha"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the fermented cereal porridge common in Northern Nigeria?",
    "options": [
      "Ground ogbono seeds",
      "Kunu",
      "Pounded yam",
      "Ji Abubo"
    ],
    "answer": "Kunu"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which Nigerian food is served with 'draw soup' for a slimy texture?",
    "options": [
      "Amala",
      "Kunu",
      "Ijaw",
      "Waterleaf and Okazi leaf"
    ],
    "answer": "Amala"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Ogbono' derived from?",
    "options": [
      "Ofe Akwu",
      "Improves draw/sliminess",
      "Palm fruit extract",
      "Wild mango seeds"
    ],
    "answer": "Wild mango seeds"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the name of the Igbo traditional meal often eaten during new yam festivals?",
    "options": [
      "Edikaikong",
      "Ground ogbono seeds",
      "Pounded yam",
      "Ji Abubo"
    ],
    "answer": "Ji Abubo"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which local Nigerian oil is made from roasted melon seeds?",
    "options": [
      "Boli",
      "Egusi oil",
      "Ji Abubo",
      "Kunu"
    ],
    "answer": "Egusi oil"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the major difference between 'Efo Riro' and 'Afang Soup'?",
    "options": [
      "Yoruba",
      "Dawadawa",
      "Hausa",
      "Use of spinach vs okazi leaves"
    ],
    "answer": "Use of spinach vs okazi leaves"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which state is most associated with 'Owo soup'?",
    "options": [
      "Fermented seasoning",
      "Hausa",
      "Yoruba",
      "Delta"
    ],
    "answer": "Delta"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the thickener used in traditional 'Ogbono soup'?",
    "options": [
      "Agidi",
      "Ground ogbono seeds",
      "Egusi oil",
      "Ji Abubo"
    ],
    "answer": "Ground ogbono seeds"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which part of the cow is used to prepare 'Nkwobi'?",
    "options": [
      "Egusi oil",
      "Improves draw/sliminess",
      "Cow foot",
      "Dawadawa"
    ],
    "answer": "Cow foot"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the key ingredient in 'Moi Moi'?",
    "options": [
      "Waterleaf and Okazi leaf",
      "Ground peeled beans",
      "Amala",
      "Kunu"
    ],
    "answer": "Ground peeled beans"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the preservation method used in producing 'Kilishi'?",
    "options": [
      "Moi Moi",
      "Sun-drying spiced beef",
      "Agidi",
      "Hausa"
    ],
    "answer": "Sun-drying spiced beef"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which Nigerian soup uses ground crayfish, periwinkle, and waterleaf?",
    "options": [
      "Scent leaf or pumpkin leaf",
      "Edikaikong",
      "Fermented seasoning",
      "Ji Abubo"
    ],
    "answer": "Edikaikong"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the culinary function of 'iru' in Yoruba dishes?",
    "options": [
      "Fermented seasoning",
      "Ijaw",
      "Pounded yam",
      "Dawadawa"
    ],
    "answer": "Fermented seasoning"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which food is made by roasting plantain and is a street delicacy?",
    "options": [
      "Boli",
      "Amala",
      "Fonio",
      "Hausa"
    ],
    "answer": "Boli"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the main starch used in making 'Starch and Banga'?",
    "options": [
      "Cassava starch",
      "Waterleaf and Okazi leaf",
      "Gbegiri",
      "Southeast"
    ],
    "answer": "Cassava starch"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the delicacy 'Ekpang Nkukwo' made from?",
    "options": [
      "Amala",
      "Grated cocoyam and vegetables",
      "Yam pepper soup with goat meat",
      "Ekuru"
    ],
    "answer": "Grated cocoyam and vegetables"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Tuwon Dawa' made from?",
    "options": [
      "Kunu",
      "Amala",
      "Edikaikong",
      "Guinea corn flour"
    ],
    "answer": "Guinea corn flour"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What are the leafy greens used in 'Ofe Akwu'?",
    "options": [
      "Scent leaf or pumpkin leaf",
      "Abacha",
      "Amala",
      "Improves draw/sliminess"
    ],
    "answer": "Scent leaf or pumpkin leaf"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which fermented condiment is made from locust beans?",
    "options": [
      "Hausa",
      "Cow foot",
      "Ijaw",
      "Dawadawa"
    ],
    "answer": "Dawadawa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which food is similar to 'Tamales' but Nigerian and wrapped in banana leaves?",
    "options": [
      "Ijaw",
      "Egusi oil",
      "Moi Moi",
      "Ekuru"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the function of 'kaun' (potash) in cooking Ogbono or Okra?",
    "options": [
      "Abacha",
      "Improves draw/sliminess",
      "Ji Abubo",
      "Hausa"
    ],
    "answer": "Improves draw/sliminess"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe makes 'Fisherman soup' a traditional meal?",
    "options": [
      "Hausa",
      "Kunu",
      "Abacha",
      "Ijaw"
    ],
    "answer": "Ijaw"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which nut-based soup is a staple in Igbo cuisine?",
    "options": [
      "Waterleaf and Okazi leaf",
      "Edikaikong",
      "Ofe Akwu",
      "Efik/Ibibio"
    ],
    "answer": "Ofe Akwu"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Acha' commonly called in Nigerian markets?",
    "options": [
      "Grated cocoyam and vegetables",
      "Fonio",
      "Amala",
      "Southeast"
    ],
    "answer": "Fonio"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What local food is made from fermented maize and wrapped in leaves?",
    "options": [
      "Cow foot",
      "Improves draw/sliminess",
      "Ofe Akwu",
      "Agidi"
    ],
    "answer": "Agidi"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe prepares 'Waina' (rice cake)?",
    "options": [
      "Agidi",
      "Edikaikong",
      "Dawadawa",
      "Hausa"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the traditional Yoruba soup made with fermented locust beans and melon seeds called?",
    "options": [
      "Gbegiri",
      "Egusi oil",
      "Hausa",
      "Amala"
    ],
    "answer": "Gbegiri"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which Nigerian dish is made from ground African yam beans and steamed in leaves?",
    "options": [
      "Amala",
      "Waterleaf and Okazi leaf",
      "Grated cocoyam and vegetables",
      "Ekuru"
    ],
    "answer": "Ekuru"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the staple food in Tiv traditional meals?",
    "options": [
      "Pounded yam",
      "Scent leaf or pumpkin leaf",
      "Improves draw/sliminess",
      "Fonio"
    ],
    "answer": "Pounded yam"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe is known for the dish 'Tuwo Shinkafa'?",
    "options": [
      "Egusi oil",
      "Fermented seasoning",
      "Hausa",
      "Cow foot"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Ukodo' in Urhobo cuisine?",
    "options": [
      "Gbegiri",
      "Yam pepper soup with goat meat",
      "Kunu",
      "Ofe Akwu"
    ],
    "answer": "Yam pepper soup with goat meat"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which region in Nigeria is known for 'Ofe Nsala'?",
    "options": [
      "Dawadawa",
      "Egusi oil",
      "Ijaw",
      "Southeast"
    ],
    "answer": "Southeast"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the main ingredient in 'Banga Soup'?",
    "options": [
      "Edikaikong",
      "Palm fruit extract",
      "Ji Abubo",
      "Cow foot"
    ],
    "answer": "Palm fruit extract"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe traditionally prepares 'Miyan Kuka'?",
    "options": [
      "Vernonia amygdalina",
      "Hausa",
      "Cow foot",
      "Ground peeled beans"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the Nigerian delicacy 'Afang Soup' made from?",
    "options": [
      "Improves draw/sliminess",
      "Waterleaf and Okazi leaf",
      "Dawadawa",
      "Fermented seasoning"
    ],
    "answer": "Waterleaf and Okazi leaf"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which ethnic group prepares 'Edikaikong'?",
    "options": [
      "Agidi",
      "Cassava starch",
      "Gbegiri",
      "Efik/Ibibio"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the primary leaf used in making 'Bitterleaf Soup'?",
    "options": [
      "Cassava starch",
      "Edikaikong",
      "Scent leaf or pumpkin leaf",
      "Vernonia amygdalina"
    ],
    "answer": "Vernonia amygdalina"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe is associated with 'Ofada rice' and sauce?",
    "options": [
      "Hausa",
      "Ijaw",
      "Agidi",
      "Yoruba"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which rare Nigerian food is made from grated cassava and served like couscous?",
    "options": [
      "Use of spinach vs okazi leaves",
      "Pounded yam",
      "Waterleaf and Okazi leaf",
      "Abacha"
    ],
    "answer": "Abacha"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the fermented cereal porridge common in Northern Nigeria?",
    "options": [
      "Ground peeled beans",
      "Ekuru",
      "Kunu",
      "Palm fruit extract"
    ],
    "answer": "Kunu"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which Nigerian food is served with 'draw soup' for a slimy texture?",
    "options": [
      "Efik/Ibibio",
      "Yoruba",
      "Hausa",
      "Amala"
    ],
    "answer": "Amala"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Ogbono' derived from?",
    "options": [
      "Use of spinach vs okazi leaves",
      "Cassava starch",
      "Wild mango seeds",
      "Ekuru"
    ],
    "answer": "Wild mango seeds"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the name of the Igbo traditional meal often eaten during new yam festivals?",
    "options": [
      "Fonio",
      "Ji Abubo",
      "Southeast",
      "Agidi"
    ],
    "answer": "Ji Abubo"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which local Nigerian oil is made from roasted melon seeds?",
    "options": [
      "Waterleaf and Okazi leaf",
      "Kunu",
      "Ijaw",
      "Egusi oil"
    ],
    "answer": "Egusi oil"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the major difference between 'Efo Riro' and 'Afang Soup'?",
    "options": [
      "Ekuru",
      "Use of spinach vs okazi leaves",
      "Southeast",
      "Wild mango seeds"
    ],
    "answer": "Use of spinach vs okazi leaves"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which state is most associated with 'Owo soup'?",
    "options": [
      "Delta",
      "Ekuru",
      "Agidi",
      "Grated cocoyam and vegetables"
    ],
    "answer": "Delta"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the thickener used in traditional 'Ogbono soup'?",
    "options": [
      "Fonio",
      "Agidi",
      "Ground ogbono seeds",
      "Grated cocoyam and vegetables"
    ],
    "answer": "Ground ogbono seeds"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which part of the cow is used to prepare 'Nkwobi'?",
    "options": [
      "Ground peeled beans",
      "Hausa",
      "Fonio",
      "Cow foot"
    ],
    "answer": "Cow foot"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the key ingredient in 'Moi Moi'?",
    "options": [
      "Ground peeled beans",
      "Sun-drying spiced beef",
      "Ofe Akwu",
      "Waterleaf and Okazi leaf"
    ],
    "answer": "Ground peeled beans"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the preservation method used in producing 'Kilishi'?",
    "options": [
      "Sun-drying spiced beef",
      "Agidi",
      "Pounded yam",
      "Yam pepper soup with goat meat"
    ],
    "answer": "Sun-drying spiced beef"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which Nigerian soup uses ground crayfish, periwinkle, and waterleaf?",
    "options": [
      "Abacha",
      "Edikaikong",
      "Scent leaf or pumpkin leaf",
      "Ofe Akwu"
    ],
    "answer": "Edikaikong"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the culinary function of 'iru' in Yoruba dishes?",
    "options": [
      "Ji Abubo",
      "Grated cocoyam and vegetables",
      "Sun-drying spiced beef",
      "Fermented seasoning"
    ],
    "answer": "Fermented seasoning"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which food is made by roasting plantain and is a street delicacy?",
    "options": [
      "Gbegiri",
      "Ijaw",
      "Moi Moi",
      "Boli"
    ],
    "answer": "Boli"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the main starch used in making 'Starch and Banga'?",
    "options": [
      "Cassava starch",
      "Delta",
      "Hausa",
      "Southeast"
    ],
    "answer": "Cassava starch"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the delicacy 'Ekpang Nkukwo' made from?",
    "options": [
      "Grated cocoyam and vegetables",
      "Kunu",
      "Yam pepper soup with goat meat",
      "Palm fruit extract"
    ],
    "answer": "Grated cocoyam and vegetables"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Tuwon Dawa' made from?",
    "options": [
      "Yam pepper soup with goat meat",
      "Guinea corn flour",
      "Grated cocoyam and vegetables",
      "Dawadawa"
    ],
    "answer": "Guinea corn flour"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What are the leafy greens used in 'Ofe Akwu'?",
    "options": [
      "Scent leaf or pumpkin leaf",
      "Cow foot",
      "Wild mango seeds",
      "Ground peeled beans"
    ],
    "answer": "Scent leaf or pumpkin leaf"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which fermented condiment is made from locust beans?",
    "options": [
      "Pounded yam",
      "Fermented seasoning",
      "Waterleaf and Okazi leaf",
      "Dawadawa"
    ],
    "answer": "Dawadawa"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which food is similar to 'Tamales' but Nigerian and wrapped in banana leaves?",
    "options": [
      "Dawadawa",
      "Moi Moi",
      "Ground peeled beans",
      "Hausa"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is the function of 'kaun' (potash) in cooking Ogbono or Okra?",
    "options": [
      "Ground ogbono seeds",
      "Improves draw/sliminess",
      "Gbegiri",
      "Palm fruit extract"
    ],
    "answer": "Improves draw/sliminess"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe makes 'Fisherman soup' a traditional meal?",
    "options": [
      "Fermented seasoning",
      "Hausa",
      "Edikaikong",
      "Ijaw"
    ],
    "answer": "Ijaw"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which nut-based soup is a staple in Igbo cuisine?",
    "options": [
      "Ofe Akwu",
      "Vernonia amygdalina",
      "Fermented seasoning",
      "Moi Moi"
    ],
    "answer": "Ofe Akwu"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What is 'Acha' commonly called in Nigerian markets?",
    "options": [
      "Scent leaf or pumpkin leaf",
      "Fonio",
      "Dawadawa",
      "Gbegiri"
    ],
    "answer": "Fonio"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "What local food is made from fermented maize and wrapped in leaves?",
    "options": [
      "Ground ogbono seeds",
      "Cow foot",
      "Agidi",
      "Ji Abubo"
    ],
    "answer": "Agidi"
  },
  {
    "category": "Food",
    "difficulty": "Hard",
    "question": "Which tribe prepares 'Waina' (rice cake)?",
    "options": [
      "Ofe Akwu",
      "Ijaw",
      "Use of spinach vs okazi leaves",
      "Hausa"
    ],
    "answer": "Hausa"
  },


  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is 'Eba' made from?",
    "options": [
      "Cassava flakes (Garri)",
      "Spinach",
      "Clay pot",
      "Fermented maize"
    ],
    "answer": "Cassava flakes (Garri)"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is commonly served with 'Fufu' in southern Nigeria?",
    "options": [
      "Ila",
      "Cassava flakes (Garri)",
      "Pounded yam",
      "Ogbono"
    ],
    "answer": "Ogbono"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian snack is made from fried bean paste?",
    "options": [
      "Kunu",
      "Ofe Onugbu",
      "Akara",
      "Cow foot"
    ],
    "answer": "Akara"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the common side dish for 'Jollof Rice'?",
    "options": [
      "Draw soup",
      "Fried plantain",
      "Spiced broth with meat or fish",
      "Tuwo Masara"
    ],
    "answer": "Fried plantain"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which dish is made with beans and often cooked in leaves?",
    "options": [
      "Akamu and Akara",
      "Chin Chin",
      "Moi Moi",
      "Afang soup"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the popular northern Nigerian spicy meat snack?",
    "options": [
      "Suya",
      "Fluted pumpkin leaf",
      "Afang soup",
      "Ofe Onugbu"
    ],
    "answer": "Suya"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the main ingredient in 'Egusi soup'?",
    "options": [
      "Melon seeds",
      "Spiced broth with meat or fish",
      "Spinach",
      "Dodo"
    ],
    "answer": "Melon seeds"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian dish is commonly eaten for breakfast?",
    "options": [
      "Fisherman soup",
      "Akamu and Akara",
      "Yam Porridge",
      "Cow foot"
    ],
    "answer": "Akamu and Akara"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Yoruba name for okra?",
    "options": [
      "Ogbono",
      "Yam Porridge",
      "Ewa",
      "Ila"
    ],
    "answer": "Ila"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which starch is traditionally served with 'Banga soup'?",
    "options": [
      "Hibiscus petals",
      "Starch",
      "Draw soup",
      "Amala and Ewedu"
    ],
    "answer": "Starch"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian meal is made from mashed yam?",
    "options": [
      "Pounded yam",
      "Okra soup",
      "Ila",
      "Kunu"
    ],
    "answer": "Pounded yam"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the traditional cooking pot used in many rural areas?",
    "options": [
      "Unripe plantain",
      "Clay pot",
      "Dodo",
      "Pounded yam"
    ],
    "answer": "Clay pot"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which leafy vegetable is commonly used in 'Efo Riro'?",
    "options": [
      "Suya",
      "Kulikuli",
      "Akara",
      "Spinach"
    ],
    "answer": "Spinach"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the fermented drink made from millet or sorghum?",
    "options": [
      "Moi Moi",
      "Local brown rice",
      "Draw soup",
      "Kunu"
    ],
    "answer": "Kunu"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which meal is considered a festive rice dish in Nigeria?",
    "options": [
      "Amala and Ewedu",
      "Pap",
      "Jollof Rice",
      "Local brown rice"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What ingredient is used to make 'Pap' or 'Akamu'?",
    "options": [
      "Fisherman soup",
      "Hibiscus petals",
      "Fermented maize",
      "Amala and Ewedu"
    ],
    "answer": "Fermented maize"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which vegetable is known as 'Ugu'?",
    "options": [
      "Ata",
      "Ofada sauce",
      "Dodo",
      "Fluted pumpkin leaf"
    ],
    "answer": "Fluted pumpkin leaf"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is 'Pepper soup' primarily made of?",
    "options": [
      "Spiced broth with meat or fish",
      "Unripe plantain",
      "Okra soup",
      "Melon seeds"
    ],
    "answer": "Spiced broth with meat or fish"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which type of rice is used in 'Ofada rice'?",
    "options": [
      "Draw soup",
      "Local brown rice",
      "Starch",
      "Moi Moi"
    ],
    "answer": "Local brown rice"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Yoruba name for beans?",
    "options": [
      "Starch",
      "Melon seeds",
      "Ewa",
      "Okra soup"
    ],
    "answer": "Ewa"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the popular soup from the Niger Delta made with seafood?",
    "options": [
      "Cassava flakes (Garri)",
      "Draw soup",
      "Jollof Rice",
      "Fisherman soup"
    ],
    "answer": "Fisherman soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup uses okra and ogbono together?",
    "options": [
      "Dodo",
      "Afang soup",
      "Jollof Rice",
      "Draw soup"
    ],
    "answer": "Draw soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the sweet Nigerian snack made from groundnuts and sugar?",
    "options": [
      "Afang soup",
      "Ofe Onugbu",
      "Kulikuli",
      "Draw soup"
    ],
    "answer": "Kulikuli"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which food is similar to custard and often eaten with Akara?",
    "options": [
      "Ewa",
      "Fried plantain",
      "Fluted pumpkin leaf",
      "Pap"
    ],
    "answer": "Pap"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the common protein used in Nkwobi?",
    "options": [
      "Spiced broth with meat or fish",
      "Cow foot",
      "Yam Porridge",
      "Tuwo Masara"
    ],
    "answer": "Cow foot"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the crispy snack made from fried dough?",
    "options": [
      "Unripe plantain",
      "Afang soup",
      "Tuwo Masara",
      "Chin Chin"
    ],
    "answer": "Chin Chin"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which food is served at many Yoruba naming ceremonies?",
    "options": [
      "Okra soup",
      "Fermented maize",
      "Ila",
      "Amala and Ewedu"
    ],
    "answer": "Amala and Ewedu"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is commonly associated with the Igbo people?",
    "options": [
      "Chin Chin",
      "Okra soup",
      "Ofe Onugbu",
      "Fluted pumpkin leaf"
    ],
    "answer": "Ofe Onugbu"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Nigerian term for grilled meat on skewers?",
    "options": [
      "Spinach",
      "Afang soup",
      "Suya",
      "Fisherman soup"
    ],
    "answer": "Suya"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian food is made by boiling and frying yam cubes?",
    "options": [
      "Pap",
      "Melon seeds",
      "Akara",
      "Yam Porridge"
    ],
    "answer": "Yam Porridge"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the term for fried ripe plantain slices?",
    "options": [
      "Ewa",
      "Cassava flakes (Garri)",
      "Dodo",
      "Fermented maize"
    ],
    "answer": "Dodo"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which northern food is prepared from steamed corn flour?",
    "options": [
      "Starch",
      "Ogbono",
      "Tuwo Masara",
      "Cassava flakes (Garri)"
    ],
    "answer": "Tuwo Masara"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is 'Zobo' made from?",
    "options": [
      "Hibiscus petals",
      "Chin Chin",
      "Afang soup",
      "Fermented maize"
    ],
    "answer": "Hibiscus petals"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is known for its sticky/slimy texture?",
    "options": [
      "Ila",
      "Fluted pumpkin leaf",
      "Okra soup",
      "Moi Moi"
    ],
    "answer": "Okra soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which part of the plantain is used in 'Plantain chips'?",
    "options": [
      "Local brown rice",
      "Starch",
      "Unripe plantain",
      "Suya"
    ],
    "answer": "Unripe plantain"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for pepper?",
    "options": [
      "Ewa",
      "Akamu and Akara",
      "Unripe plantain",
      "Ata"
    ],
    "answer": "Ata"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is a favourite in Cross River and Akwa Ibom states?",
    "options": [
      "Ata",
      "Hibiscus petals",
      "Afang soup",
      "Tuwo Masara"
    ],
    "answer": "Afang soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the thick brown Nigerian sauce made with palm oil and spices?",
    "options": [
      "Hibiscus petals",
      "Ofada sauce",
      "Suya",
      "Pap"
    ],
    "answer": "Ofada sauce"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is 'Eba' made from?",
    "options": [
      "Suya",
      "Ata",
      "Jollof Rice",
      "Cassava flakes (Garri)"
    ],
    "answer": "Cassava flakes (Garri)"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is commonly served with 'Fufu' in southern Nigeria?",
    "options": [
      "Hibiscus petals",
      "Ata",
      "Ogbono",
      "Tuwo Masara"
    ],
    "answer": "Ogbono"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian snack is made from fried bean paste?",
    "options": [
      "Akara",
      "Suya",
      "Cow foot",
      "Hibiscus petals"
    ],
    "answer": "Akara"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the common side dish for 'Jollof Rice'?",
    "options": [
      "Fried plantain",
      "Clay pot",
      "Starch",
      "Ogbono"
    ],
    "answer": "Fried plantain"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which dish is made with beans and often cooked in leaves?",
    "options": [
      "Chin Chin",
      "Moi Moi",
      "Suya",
      "Ofada sauce"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the popular northern Nigerian spicy meat snack?",
    "options": [
      "Suya",
      "Moi Moi",
      "Pounded yam",
      "Ofe Onugbu"
    ],
    "answer": "Suya"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the main ingredient in 'Egusi soup'?",
    "options": [
      "Fisherman soup",
      "Ila",
      "Moi Moi",
      "Melon seeds"
    ],
    "answer": "Melon seeds"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian dish is commonly eaten for breakfast?",
    "options": [
      "Tuwo Masara",
      "Spinach",
      "Akamu and Akara",
      "Kunu"
    ],
    "answer": "Akamu and Akara"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Yoruba name for okra?",
    "options": [
      "Draw soup",
      "Fluted pumpkin leaf",
      "Ogbono",
      "Ila"
    ],
    "answer": "Ila"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which starch is traditionally served with 'Banga soup'?",
    "options": [
      "Amala and Ewedu",
      "Suya",
      "Fermented maize",
      "Starch"
    ],
    "answer": "Starch"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian meal is made from mashed yam?",
    "options": [
      "Pounded yam",
      "Suya",
      "Jollof Rice",
      "Starch"
    ],
    "answer": "Pounded yam"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the traditional cooking pot used in many rural areas?",
    "options": [
      "Hibiscus petals",
      "Suya",
      "Clay pot",
      "Afang soup"
    ],
    "answer": "Clay pot"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which leafy vegetable is commonly used in 'Efo Riro'?",
    "options": [
      "Ogbono",
      "Akamu and Akara",
      "Spinach",
      "Pap"
    ],
    "answer": "Spinach"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the fermented drink made from millet or sorghum?",
    "options": [
      "Cow foot",
      "Suya",
      "Draw soup",
      "Kunu"
    ],
    "answer": "Kunu"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which meal is considered a festive rice dish in Nigeria?",
    "options": [
      "Afang soup",
      "Clay pot",
      "Jollof Rice",
      "Kunu"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What ingredient is used to make 'Pap' or 'Akamu'?",
    "options": [
      "Suya",
      "Ata",
      "Fermented maize",
      "Cow foot"
    ],
    "answer": "Fermented maize"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which vegetable is known as 'Ugu'?",
    "options": [
      "Fluted pumpkin leaf",
      "Local brown rice",
      "Dodo",
      "Akamu and Akara"
    ],
    "answer": "Fluted pumpkin leaf"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is 'Pepper soup' primarily made of?",
    "options": [
      "Pap",
      "Yam Porridge",
      "Spiced broth with meat or fish",
      "Cassava flakes (Garri)"
    ],
    "answer": "Spiced broth with meat or fish"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which type of rice is used in 'Ofada rice'?",
    "options": [
      "Kulikuli",
      "Dodo",
      "Ogbono",
      "Local brown rice"
    ],
    "answer": "Local brown rice"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Yoruba name for beans?",
    "options": [
      "Kulikuli",
      "Unripe plantain",
      "Moi Moi",
      "Ewa"
    ],
    "answer": "Ewa"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the popular soup from the Niger Delta made with seafood?",
    "options": [
      "Dodo",
      "Fisherman soup",
      "Melon seeds",
      "Okra soup"
    ],
    "answer": "Fisherman soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup uses okra and ogbono together?",
    "options": [
      "Draw soup",
      "Kunu",
      "Cassava flakes (Garri)",
      "Spinach"
    ],
    "answer": "Draw soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the sweet Nigerian snack made from groundnuts and sugar?",
    "options": [
      "Hibiscus petals",
      "Cow foot",
      "Ewa",
      "Kulikuli"
    ],
    "answer": "Kulikuli"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which food is similar to custard and often eaten with Akara?",
    "options": [
      "Ata",
      "Pap",
      "Pounded yam",
      "Jollof Rice"
    ],
    "answer": "Pap"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the common protein used in Nkwobi?",
    "options": [
      "Ewa",
      "Draw soup",
      "Cow foot",
      "Akamu and Akara"
    ],
    "answer": "Cow foot"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the crispy snack made from fried dough?",
    "options": [
      "Chin Chin",
      "Afang soup",
      "Okra soup",
      "Local brown rice"
    ],
    "answer": "Chin Chin"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which food is served at many Yoruba naming ceremonies?",
    "options": [
      "Akamu and Akara",
      "Fried plantain",
      "Amala and Ewedu",
      "Ofada sauce"
    ],
    "answer": "Amala and Ewedu"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is commonly associated with the Igbo people?",
    "options": [
      "Afang soup",
      "Ofe Onugbu",
      "Draw soup",
      "Akara"
    ],
    "answer": "Ofe Onugbu"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Nigerian term for grilled meat on skewers?",
    "options": [
      "Jollof Rice",
      "Ogbono",
      "Suya",
      "Tuwo Masara"
    ],
    "answer": "Suya"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which Nigerian food is made by boiling and frying yam cubes?",
    "options": [
      "Yam Porridge",
      "Akamu and Akara",
      "Starch",
      "Fisherman soup"
    ],
    "answer": "Yam Porridge"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the term for fried ripe plantain slices?",
    "options": [
      "Dodo",
      "Okra soup",
      "Ila",
      "Cow foot"
    ],
    "answer": "Dodo"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which northern food is prepared from steamed corn flour?",
    "options": [
      "Ofada sauce",
      "Unripe plantain",
      "Tuwo Masara",
      "Akamu and Akara"
    ],
    "answer": "Tuwo Masara"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is 'Zobo' made from?",
    "options": [
      "Hibiscus petals",
      "Cow foot",
      "Dodo",
      "Clay pot"
    ],
    "answer": "Hibiscus petals"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is known for its sticky/slimy texture?",
    "options": [
      "Afang soup",
      "Okra soup",
      "Amala and Ewedu",
      "Spiced broth with meat or fish"
    ],
    "answer": "Okra soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which part of the plantain is used in 'Plantain chips'?",
    "options": [
      "Moi Moi",
      "Unripe plantain",
      "Starch",
      "Fermented maize"
    ],
    "answer": "Unripe plantain"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for pepper?",
    "options": [
      "Fluted pumpkin leaf",
      "Spinach",
      "Ata",
      "Okra soup"
    ],
    "answer": "Ata"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "Which soup is a favourite in Cross River and Akwa Ibom states?",
    "options": [
      "Cow foot",
      "Local brown rice",
      "Cassava flakes (Garri)",
      "Afang soup"
    ],
    "answer": "Afang soup"
  },
  {
    "category": "Food",
    "difficulty": "Medium",
    "question": "What is the thick brown Nigerian sauce made with palm oil and spices?",
    "options": [
      "Ila",
      "Ofada sauce",
      "Unripe plantain",
      "Starch"
    ],
    "answer": "Ofada sauce"
  },



  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the most popular rice dish in Nigeria?",
    "options": [
      "Jollof Rice",
      "Draw soup",
      "Pineapple",
      "Yam and egg"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Moi Moi' made from?",
    "options": [
      "Tomato stew",
      "Puff Puff",
      "Beans",
      "Fufu"
    ],
    "answer": "Beans"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian soup is known for being slimy?",
    "options": [
      "Okra soup",
      "Jollof Rice",
      "Dodo",
      "Yam and egg"
    ],
    "answer": "Okra soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the Nigerian name for fried ripe plantains?",
    "options": [
      "Jollof Rice",
      "Akara",
      "Puff Puff",
      "Dodo"
    ],
    "answer": "Dodo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which drink is made from hibiscus petals?",
    "options": [
      "Pap",
      "Dodo",
      "Akara",
      "Zobo"
    ],
    "answer": "Zobo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which snack is made from deep-fried dough?",
    "options": [
      "Zobo",
      "Chin Chin",
      "Yam and egg",
      "Beans"
    ],
    "answer": "Chin Chin"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What do Nigerians commonly eat with soup?",
    "options": [
      "Moi Moi",
      "Its unique aroma and local sauce",
      "Fufu",
      "Puff Puff"
    ],
    "answer": "Fufu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a common Nigerian breakfast made from corn?",
    "options": [
      "Beans",
      "Pap",
      "Ewedu",
      "Akara"
    ],
    "answer": "Pap"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Suya'?",
    "options": [
      "Suya",
      "Rice",
      "Eba",
      "Spicy grilled meat"
    ],
    "answer": "Spicy grilled meat"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which vegetable is known as 'Ugu'?",
    "options": [
      "Pumpkin leaf",
      "Yam fries",
      "Pineapple",
      "Banga soup"
    ],
    "answer": "Pumpkin leaf"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which snack is made from groundnuts and shaped into balls?",
    "options": [
      "Draw soup",
      "Tuwo",
      "Kulikuli",
      "Ofe Onugbu"
    ],
    "answer": "Kulikuli"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the common name for boiled yam and egg sauce?",
    "options": [
      "Dodo",
      "Pumpkin leaf",
      "Garri",
      "Yam and egg"
    ],
    "answer": "Yam and egg"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Eba' made from?",
    "options": [
      "Fufu",
      "Tuwo",
      "Yam and egg",
      "Garri"
    ],
    "answer": "Garri"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian food is wrapped in leaves and steamed?",
    "options": [
      "Dodo",
      "Ewa riro",
      "Moi Moi",
      "Tomato stew"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a soft swallow made from yam flour?",
    "options": [
      "Jollof Rice",
      "Rice",
      "Yam and egg",
      "Amala"
    ],
    "answer": "Amala"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup is made with melon seeds?",
    "options": [
      "Akara",
      "Suya",
      "Egusi soup",
      "Jollof Rice"
    ],
    "answer": "Egusi soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the Nigerian name for beans porridge?",
    "options": [
      "Tomato stew",
      "Beans",
      "Ewa riro",
      "Yam fries"
    ],
    "answer": "Ewa riro"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Boli'?",
    "options": [
      "Jollof Rice",
      "Tomato stew",
      "Moi Moi",
      "Roasted plantain"
    ],
    "answer": "Roasted plantain"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the name of the spicy Nigerian stew served with rice?",
    "options": [
      "Jollof Rice",
      "Tomato stew",
      "Okra soup",
      "Draw soup"
    ],
    "answer": "Tomato stew"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a sweet Nigerian snack eaten at parties?",
    "options": [
      "Small chops",
      "Suya",
      "Egusi soup",
      "Amala"
    ],
    "answer": "Small chops"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is typically eaten with Okra soup?",
    "options": [
      "Eba",
      "Its unique aroma and local sauce",
      "Banga soup",
      "Small chops"
    ],
    "answer": "Eba"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian food is made by frying peeled yam?",
    "options": [
      "Yam fries",
      "Banga soup",
      "Pineapple",
      "Small chops"
    ],
    "answer": "Yam fries"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the traditional Yoruba soup served with Amala?",
    "options": [
      "Ewedu",
      "Puff Puff",
      "Ofe Onugbu",
      "Small chops"
    ],
    "answer": "Ewedu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is commonly served at Nigerian weddings?",
    "options": [
      "Roasted plantain",
      "Draw soup",
      "Jollof Rice and Chicken",
      "Amala"
    ],
    "answer": "Jollof Rice and Chicken"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is often sold by roadside vendors in Nigeria?",
    "options": [
      "Puff Puff",
      "Suya",
      "Amala",
      "Chin Chin"
    ],
    "answer": "Puff Puff"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the main ingredient in Akara?",
    "options": [
      "Jollof Rice",
      "Beans",
      "Draw soup",
      "Egusi soup"
    ],
    "answer": "Beans"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which drink is often served at Nigerian parties?",
    "options": [
      "Amala",
      "Yam and egg",
      "Fufu",
      "Zobo"
    ],
    "answer": "Zobo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the common name for pounded cassava?",
    "options": [
      "Zobo",
      "Fufu",
      "Jollof Rice",
      "Pap"
    ],
    "answer": "Fufu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a common staple food in Nigeria?",
    "options": [
      "Amala",
      "Garri",
      "Draw soup",
      "Rice"
    ],
    "answer": "Rice"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the local name for cornmeal swallow in northern Nigeria?",
    "options": [
      "Zobo",
      "Tuwo",
      "Roasted plantain",
      "Okra soup"
    ],
    "answer": "Tuwo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup contains okra and ogbono?",
    "options": [
      "Pineapple",
      "Draw soup",
      "Okra soup",
      "Chin Chin"
    ],
    "answer": "Draw soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian meal includes meat on skewers?",
    "options": [
      "Puff Puff",
      "Zobo",
      "Suya",
      "Kulikuli"
    ],
    "answer": "Suya"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is traditionally eaten during festive periods?",
    "options": [
      "Fufu",
      "Yam fries",
      "Pumpkin leaf",
      "Jollof Rice"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What food is deep-fried and often eaten for breakfast?",
    "options": [
      "Ewedu",
      "Puff Puff",
      "Garri",
      "Akara"
    ],
    "answer": "Akara"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Ofada Rice' known for?",
    "options": [
      "Its unique aroma and local sauce",
      "Suya",
      "Pineapple",
      "Fufu"
    ],
    "answer": "Its unique aroma and local sauce"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup is made using bitter leaves?",
    "options": [
      "Ofe Onugbu",
      "Yam and egg",
      "Chin Chin",
      "Banga soup"
    ],
    "answer": "Ofe Onugbu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the Nigerian name for yam pottage?",
    "options": [
      "Kulikuli",
      "Rice",
      "Suya",
      "Asaro"
    ],
    "answer": "Asaro"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which fruit is used in Nigerian fruit salads?",
    "options": [
      "Pineapple",
      "Rice",
      "Ofe Onugbu",
      "Beans"
    ],
    "answer": "Pineapple"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup contains stockfish, palm oil and assorted meat?",
    "options": [
      "Pumpkin leaf",
      "Banga soup",
      "Beans",
      "Eba"
    ],
    "answer": "Banga soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the most popular rice dish in Nigeria?",
    "options": [
      "Tuwo",
      "Small chops",
      "Jollof Rice",
      "Moi Moi"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Moi Moi' made from?",
    "options": [
      "Egusi soup",
      "Beans",
      "Draw soup",
      "Ewedu"
    ],
    "answer": "Beans"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian soup is known for being slimy?",
    "options": [
      "Tomato stew",
      "Pap",
      "Okra soup",
      "Small chops"
    ],
    "answer": "Okra soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the Nigerian name for fried ripe plantains?",
    "options": [
      "Ewedu",
      "Dodo",
      "Jollof Rice",
      "Egusi soup"
    ],
    "answer": "Dodo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which drink is made from hibiscus petals?",
    "options": [
      "Pumpkin leaf",
      "Egusi soup",
      "Kulikuli",
      "Zobo"
    ],
    "answer": "Zobo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which snack is made from deep-fried dough?",
    "options": [
      "Chin Chin",
      "Eba",
      "Amala",
      "Ofe Onugbu"
    ],
    "answer": "Chin Chin"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What do Nigerians commonly eat with soup?",
    "options": [
      "Tuwo",
      "Ewedu",
      "Fufu",
      "Moi Moi"
    ],
    "answer": "Fufu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a common Nigerian breakfast made from corn?",
    "options": [
      "Yam fries",
      "Pap",
      "Eba",
      "Akara"
    ],
    "answer": "Pap"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Suya'?",
    "options": [
      "Okra soup",
      "Spicy grilled meat",
      "Banga soup",
      "Jollof Rice and Chicken"
    ],
    "answer": "Spicy grilled meat"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which vegetable is known as 'Ugu'?",
    "options": [
      "Draw soup",
      "Zobo",
      "Banga soup",
      "Pumpkin leaf"
    ],
    "answer": "Pumpkin leaf"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which snack is made from groundnuts and shaped into balls?",
    "options": [
      "Egusi soup",
      "Kulikuli",
      "Suya",
      "Fufu"
    ],
    "answer": "Kulikuli"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the common name for boiled yam and egg sauce?",
    "options": [
      "Amala",
      "Asaro",
      "Okra soup",
      "Yam and egg"
    ],
    "answer": "Yam and egg"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Eba' made from?",
    "options": [
      "Garri",
      "Amala",
      "Egusi soup",
      "Akara"
    ],
    "answer": "Garri"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian food is wrapped in leaves and steamed?",
    "options": [
      "Beans",
      "Moi Moi",
      "Zobo",
      "Chin Chin"
    ],
    "answer": "Moi Moi"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a soft swallow made from yam flour?",
    "options": [
      "Ewedu",
      "Amala",
      "Draw soup",
      "Jollof Rice"
    ],
    "answer": "Amala"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup is made with melon seeds?",
    "options": [
      "Suya",
      "Ewa riro",
      "Egusi soup",
      "Pap"
    ],
    "answer": "Egusi soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the Nigerian name for beans porridge?",
    "options": [
      "Ewa riro",
      "Zobo",
      "Jollof Rice and Chicken",
      "Yam fries"
    ],
    "answer": "Ewa riro"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Boli'?",
    "options": [
      "Puff Puff",
      "Rice",
      "Roasted plantain",
      "Pineapple"
    ],
    "answer": "Roasted plantain"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the name of the spicy Nigerian stew served with rice?",
    "options": [
      "Amala",
      "Tomato stew",
      "Eba",
      "Okra soup"
    ],
    "answer": "Tomato stew"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a sweet Nigerian snack eaten at parties?",
    "options": [
      "Moi Moi",
      "Small chops",
      "Pap",
      "Amala"
    ],
    "answer": "Small chops"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is typically eaten with Okra soup?",
    "options": [
      "Zobo",
      "Dodo",
      "Tuwo",
      "Eba"
    ],
    "answer": "Eba"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian food is made by frying peeled yam?",
    "options": [
      "Asaro",
      "Pumpkin leaf",
      "Yam fries",
      "Moi Moi"
    ],
    "answer": "Yam fries"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the traditional Yoruba soup served with Amala?",
    "options": [
      "Amala",
      "Beans",
      "Akara",
      "Ewedu"
    ],
    "answer": "Ewedu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is commonly served at Nigerian weddings?",
    "options": [
      "Spicy grilled meat",
      "Jollof Rice and Chicken",
      "Pap",
      "Puff Puff"
    ],
    "answer": "Jollof Rice and Chicken"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is often sold by roadside vendors in Nigeria?",
    "options": [
      "Puff Puff",
      "Okra soup",
      "Jollof Rice",
      "Beans"
    ],
    "answer": "Puff Puff"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the main ingredient in Akara?",
    "options": [
      "Asaro",
      "Jollof Rice and Chicken",
      "Akara",
      "Beans"
    ],
    "answer": "Beans"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which drink is often served at Nigerian parties?",
    "options": [
      "Zobo",
      "Tuwo",
      "Eba",
      "Pap"
    ],
    "answer": "Zobo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the common name for pounded cassava?",
    "options": [
      "Fufu",
      "Tuwo",
      "Jollof Rice and Chicken",
      "Asaro"
    ],
    "answer": "Fufu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is a common staple food in Nigeria?",
    "options": [
      "Zobo",
      "Rice",
      "Pap",
      "Its unique aroma and local sauce"
    ],
    "answer": "Rice"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the local name for cornmeal swallow in northern Nigeria?",
    "options": [
      "Ofe Onugbu",
      "Ewedu",
      "Tuwo",
      "Ewa riro"
    ],
    "answer": "Tuwo"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup contains okra and ogbono?",
    "options": [
      "Fufu",
      "Eba",
      "Pumpkin leaf",
      "Draw soup"
    ],
    "answer": "Draw soup"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which Nigerian meal includes meat on skewers?",
    "options": [
      "Suya",
      "Yam fries",
      "Ofe Onugbu",
      "Ewa riro"
    ],
    "answer": "Suya"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which food is traditionally eaten during festive periods?",
    "options": [
      "Yam and egg",
      "Jollof Rice",
      "Zobo",
      "Asaro"
    ],
    "answer": "Jollof Rice"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What food is deep-fried and often eaten for breakfast?",
    "options": [
      "Small chops",
      "Pumpkin leaf",
      "Zobo",
      "Akara"
    ],
    "answer": "Akara"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is 'Ofada Rice' known for?",
    "options": [
      "Akara",
      "Its unique aroma and local sauce",
      "Chin Chin",
      "Eba"
    ],
    "answer": "Its unique aroma and local sauce"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup is made using bitter leaves?",
    "options": [
      "Eba",
      "Ofe Onugbu",
      "Yam fries",
      "Beans"
    ],
    "answer": "Ofe Onugbu"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "What is the Nigerian name for yam pottage?",
    "options": [
      "Asaro",
      "Ofe Onugbu",
      "Okra soup",
      "Zobo"
    ],
    "answer": "Asaro"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which fruit is used in Nigerian fruit salads?",
    "options": [
      "Akara",
      "Amala",
      "Pineapple",
      "Ofe Onugbu"
    ],
    "answer": "Pineapple"
  },
  {
    "category": "Food",
    "difficulty": "Easy",
    "question": "Which soup contains stockfish, palm oil and assorted meat?",
    "options": [
      "Roasted plantain",
      "Suya",
      "Garri",
      "Banga soup"
    ],
    "answer": "Banga soup"
  },





  {
    category: "Languages",
    difficulty: "Easy",
    question: "What is 'Hello' in Yoruba?",
    options: ["Sannu", "Bawo ni", "Kedu", "Ina kwana"],
    answer: "Bawo ni"
  },
  
  {
    category: "Languages",
    difficulty: "Easy",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "How do you say 'Thank you' in Igbo?",
    options: ["Ese", "Nagode", "Daalu", "Shukran"],
    answer: "Daalu"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "What is 'Yes' in Hausa?",
    options: ["Eh", "Ehn", "I", "Ehna"],
    answer: "Eh"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "Which of these is not a Nigerian language?",
    options: ["Igala", "Kanuri", "Swahili", "Nupe"],
    answer: "Swahili"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "What is 'Yes' in Hausa?",
    options: ["Eh", "Ehn", "I", "Ehna"],
    answer: "Eh"
  },

  {
    category: "Languages",
    difficulty: "Easy",
    question: "How do you say 'Good morning' in Yoruba?",
    options: ["Ina kwana", "Bawo ni", "E kaaro", "Kedu"],
    answer: "E kaaro"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "What is the Hausa word for 'food'?",
    options: ["Abinci", "Tuwo", "Nomi", "Chow"],
    answer: "Abinci"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "'Kedu' means what in Igbo?",
    options: ["Welcome", "How are you?", "Sit down", "Thank you"],
    answer: "How are you?"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "Which tribe speaks the Kanuri language?",
    options: ["Hausa", "Kanuri", "Igbo", "Yoruba"],
    answer: "Kanuri"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "What does 'Nagode' mean in Hausa?",
    options: ["Sorry", "Thank you", "Goodbye", "Food"],
    answer: "Thank you"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "How do you say 'I am fine' in Yoruba?",
    options: ["Mo wa pa", "Mo wa daada", "Mo n lo", "Ko si wahala"],
    answer: "Mo wa daada"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "What is 'Daalu' in Igbo?",
    options: ["Welcome", "Goodbye", "Thank you", "Please"],
    answer: "Thank you"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "Which Nigerian language uses tones heavily?",
    options: ["Hausa", "Igbo", "Yoruba", "Kanuri"],
    answer: "Yoruba"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "What is the Hausa word for 'school'?",
    options: ["Makaranta", "Abinci", "Gida", "Yaro"],
    answer: "Makaranta"
  },
  {
    category: "Languages",
    difficulty: "Easy",
    question: "How do you say 'Come here' in Yoruba?",
    options: ["Wa nibi", "Bawo ni", "Jeun soke", "Maa bo"],
    answer: "Wa nibi"
  },
  

  {
    category: "Languages",
    difficulty: "Easy",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "Which of these is not a Nigerian language?",
    options: ["Igala", "Kanuri", "Swahili", "Nupe"],
    answer: "Swahili"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "How do you say 'Thank you' in Igbo?",
    options: ["Ese", "Nagode", "Daalu", "Shukran"],
    answer: "Daalu"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "What is 'Hello' in Yoruba?",
    options: ["Sannu", "Bawo ni", "Kedu", "Ina kwana"],
    answer: "Bawo ni"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "Which of these is not a Nigerian language?",
    options: ["Igala", "Kanuri", "Swahili", "Nupe"],
    answer: "Swahili"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Medium",
    question: "What is 'Yes' in Hausa?",
    options: ["Eh", "Ehn", "I", "Ehna"],
    answer: "Eh"
  },
  {
    category: "Languages",
    difficulty: "Hard",
    question: "How do you say 'Thank you' in Igbo?",
    options: ["Ese", "Nagode", "Daalu", "Shukran"],
    answer: "Daalu"
  },
  {
    category: "Languages",
    difficulty: "Hard",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Hard",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Hard",
    question: "Which language is spoken by the Tiv people?",
    options: ["Hausa", "Yoruba", "Tiv", "Ibibio"],
    answer: "Tiv"
  },
  {
    category: "Languages",
    difficulty: "Hard",
    question: "What is 'Yes' in Hausa?",
    options: ["Eh", "Ehn", "I", "Ehna"],
    answer: "Eh"
  },
  {
    category: "Languages",
    difficulty: "Hard",
    question: "What is 'Hello' in Yoruba?",
    options: ["Sannu", "Bawo ni", "Kedu", "Ina kwana"],
    answer: "Bawo ni"
  },


  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses the Nsibidi writing system?",
    "options": [
      "Igbo",
      "Edo",
      "By God's grace",
      "Efik/Ibibio"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What tonal distinction differentiates '\u1ecdk\u1ecd' (husband) and '\u00f2k\u00f2' (farm) in Yoruba?",
    "options": [
      "Berom",
      "Jukun",
      "Tone marking",
      "Edoid"
    ],
    "answer": "Tone marking"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is predominantly spoken in Borno State?",
    "options": [
      "Efik",
      "Kanuri",
      "Ndokwa",
      "Jukun"
    ],
    "answer": "Kanuri"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language has three major dialects: Enuani, Ika, and Ogbaru?",
    "options": [
      "Gwari",
      "Igbo",
      "Pronunciation and lexical variation",
      "Thank you"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the linguistic classification of the Tiv language?",
    "options": [
      "Hausa",
      "Benue-Congo",
      "Yoruba",
      "Berom"
    ],
    "answer": "Benue-Congo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What does 'Da Allah' mean in Hausa?",
    "options": [
      "Gwari",
      "Efik/Ibibio",
      "By God's grace",
      "Ejagham"
    ],
    "answer": "By God's grace"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is associated with the Eyo festival?",
    "options": [
      "Yoruba",
      "Benue-Congo",
      "Pronunciation and lexical variation",
      "Edo"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is considered endangered and spoken in Cross River?",
    "options": [
      "Igbo",
      "Yoruba",
      "How are you?",
      "Ejagham"
    ],
    "answer": "Ejagham"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language group do the Nupe people belong to?",
    "options": [
      "Tiv",
      "Volta\u2013Niger",
      "Edoid",
      "Senegambian"
    ],
    "answer": "Volta\u2013Niger"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the difference between Central and Eastern Igbo dialects?",
    "options": [
      "Tiv",
      "Edoid",
      "Pronunciation and lexical variation",
      "Igbo"
    ],
    "answer": "Pronunciation and lexical variation"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses the word 'Ina kwana' to mean 'Good morning'?",
    "options": [
      "Igbo",
      "Hausa",
      "Ijaw",
      "Yoruba"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is spoken by the majority in Taraba State?",
    "options": [
      "Jukun",
      "What are you doing?",
      "Igbo",
      "How are you?"
    ],
    "answer": "Jukun"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is native to the Kalabari people?",
    "options": [
      "Ijaw",
      "Ejagham",
      "Tone marking",
      "Yoruba"
    ],
    "answer": "Ijaw"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the translation of 'A kasa lafiya?' in Hausa?",
    "options": [
      "Did you sleep well?",
      "Hausa",
      "Okrika",
      "Jarawa"
    ],
    "answer": "Did you sleep well?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is most widely spoken outside Nigeria?",
    "options": [
      "Yoruba",
      "Igbo",
      "Volta\u2013Niger",
      "Kanuri"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is associated with the traditional Benin Kingdom?",
    "options": [
      "Igbo",
      "Edo",
      "Jarawa",
      "Did you sleep well?"
    ],
    "answer": "Edo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which dialect of Yoruba is spoken in Ilorin?",
    "options": [
      "Hausa",
      "Kwara Yoruba",
      "Efik/Ibibio",
      "Ejagham"
    ],
    "answer": "Kwara Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses the word 'Ndewo' for greeting?",
    "options": [
      "Jarawa",
      "Igbo",
      "Senegambian",
      "Edoid"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is 'Se daadaa ni?' in Yoruba?",
    "options": [
      "Are you well?",
      "Ijaw",
      "What are you doing?",
      "Jarawa"
    ],
    "answer": "Are you well?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is spoken in the Niger-Congo family and uses 'mi' for 'I'?",
    "options": [
      "Tone marking",
      "Yoruba",
      "Efik",
      "Adamawa Fulfulde"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which northern minority language is mostly oral and lacks standardised writing?",
    "options": [
      "Ejagham",
      "Gwari",
      "What are you doing?",
      "Jarawa"
    ],
    "answer": "Gwari"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language uses 'Kedu' as a common greeting?",
    "options": [
      "Gwari",
      "Igbo",
      "Volta\u2013Niger",
      "Efik"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is traditionally whistled for secret communication?",
    "options": [
      "Yoruba",
      "Tone marking",
      "Kwara Yoruba",
      "Did you sleep well?"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Nagode' in Hausa?",
    "options": [
      "Jukun",
      "Okrika",
      "Hausa",
      "Thank you"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is spoken by the Idoma people?",
    "options": [
      "Efik",
      "Idoma",
      "Kanuri",
      "Ijaw"
    ],
    "answer": "Idoma"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language group includes Itsekiri, Urhobo, and Isoko?",
    "options": [
      "Benue-Congo",
      "Senegambian",
      "Edoid",
      "Ejagham"
    ],
    "answer": "Edoid"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses click sounds borrowed from neighbouring groups?",
    "options": [
      "Hausa",
      "Yoruba",
      "Jarawa",
      "Pronunciation and lexical variation"
    ],
    "answer": "Jarawa"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the predominant language in the city of Makurdi?",
    "options": [
      "By God's grace",
      "Tiv",
      "Ijaw",
      "Senegambian"
    ],
    "answer": "Tiv"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is used in the Tiv folktale tradition?",
    "options": [
      "Yoruba",
      "Thank you",
      "Tiv",
      "Volta\u2013Niger"
    ],
    "answer": "Tiv"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which ethnic group speaks the Ukwuani language?",
    "options": [
      "Tone marking",
      "Efik",
      "Thank you",
      "Ndokwa"
    ],
    "answer": "Ndokwa"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Bawo ni?' in Yoruba?",
    "options": [
      "Igbo",
      "How are you?",
      "Kanuri",
      "Pronunciation and lexical variation"
    ],
    "answer": "How are you?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What does 'Me ka wo ya?' mean in Hausa?",
    "options": [
      "Igbo",
      "Yoruba",
      "How are you?",
      "What are you doing?"
    ],
    "answer": "What are you doing?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language family does Fulfulde belong to?",
    "options": [
      "Senegambian",
      "Ijaw",
      "Tiv",
      "Berom"
    ],
    "answer": "Senegambian"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the primary dialect of Fulani spoken in Nigeria?",
    "options": [
      "Adamawa Fulfulde",
      "Idoma",
      "Yoruba",
      "Igbo"
    ],
    "answer": "Adamawa Fulfulde"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is closely related to Igala?",
    "options": [
      "Tone marking",
      "How are you?",
      "Idoma",
      "Yoruba"
    ],
    "answer": "Idoma"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which minority language is spoken in Plateau State and has over 20 dialects?",
    "options": [
      "Edo",
      "How are you?",
      "Berom",
      "Adamawa Fulfulde"
    ],
    "answer": "Berom"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language spoken in Rivers State is considered part of the Ijaw cluster?",
    "options": [
      "Okrika",
      "Yoruba",
      "Thank you",
      "Jukun"
    ],
    "answer": "Okrika"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language has had Christian religious texts translated since the 1800s?",
    "options": [
      "Efik",
      "Volta\u2013Niger",
      "Gwari",
      "Kwara Yoruba"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language was used in early missionary education in southeastern Nigeria?",
    "options": [
      "Edoid",
      "Yoruba",
      "Volta\u2013Niger",
      "Efik"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses the Nsibidi writing system?",
    "options": [
      "Edo",
      "Hausa",
      "Igbo",
      "Efik/Ibibio"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What tonal distinction differentiates '\u1ecdk\u1ecd' (husband) and '\u00f2k\u00f2' (farm) in Yoruba?",
    "options": [
      "Tone marking",
      "Gwari",
      "Kwara Yoruba",
      "Igbo"
    ],
    "answer": "Tone marking"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is predominantly spoken in Borno State?",
    "options": [
      "Efik/Ibibio",
      "How are you?",
      "Kanuri",
      "Idoma"
    ],
    "answer": "Kanuri"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language has three major dialects: Enuani, Ika, and Ogbaru?",
    "options": [
      "Kwara Yoruba",
      "Okrika",
      "Yoruba",
      "Igbo"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the linguistic classification of the Tiv language?",
    "options": [
      "Idoma",
      "Okrika",
      "Benue-Congo",
      "Berom"
    ],
    "answer": "Benue-Congo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What does 'Da Allah' mean in Hausa?",
    "options": [
      "By God's grace",
      "Tiv",
      "Are you well?",
      "Gwari"
    ],
    "answer": "By God's grace"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is associated with the Eyo festival?",
    "options": [
      "Kanuri",
      "Benue-Congo",
      "Yoruba",
      "Edoid"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is considered endangered and spoken in Cross River?",
    "options": [
      "Jukun",
      "Benue-Congo",
      "Ejagham",
      "How are you?"
    ],
    "answer": "Ejagham"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language group do the Nupe people belong to?",
    "options": [
      "What are you doing?",
      "Volta\u2013Niger",
      "Idoma",
      "Gwari"
    ],
    "answer": "Volta\u2013Niger"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the difference between Central and Eastern Igbo dialects?",
    "options": [
      "Pronunciation and lexical variation",
      "Kanuri",
      "Tiv",
      "Yoruba"
    ],
    "answer": "Pronunciation and lexical variation"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses the word 'Ina kwana' to mean 'Good morning'?",
    "options": [
      "Efik/Ibibio",
      "Hausa",
      "Yoruba",
      "Jukun"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is spoken by the majority in Taraba State?",
    "options": [
      "Jukun",
      "Kanuri",
      "Igbo",
      "By God's grace"
    ],
    "answer": "Jukun"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is native to the Kalabari people?",
    "options": [
      "Ijaw",
      "Did you sleep well?",
      "Pronunciation and lexical variation",
      "Gwari"
    ],
    "answer": "Ijaw"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the translation of 'A kasa lafiya?' in Hausa?",
    "options": [
      "Pronunciation and lexical variation",
      "Did you sleep well?",
      "Senegambian",
      "Adamawa Fulfulde"
    ],
    "answer": "Did you sleep well?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is most widely spoken outside Nigeria?",
    "options": [
      "Yoruba",
      "Idoma",
      "How are you?",
      "Gwari"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is associated with the traditional Benin Kingdom?",
    "options": [
      "Senegambian",
      "Edo",
      "Did you sleep well?",
      "Ejagham"
    ],
    "answer": "Edo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which dialect of Yoruba is spoken in Ilorin?",
    "options": [
      "Gwari",
      "Ndokwa",
      "Yoruba",
      "Kwara Yoruba"
    ],
    "answer": "Kwara Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses the word 'Ndewo' for greeting?",
    "options": [
      "Yoruba",
      "Senegambian",
      "Benue-Congo",
      "Igbo"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is 'Se daadaa ni?' in Yoruba?",
    "options": [
      "Berom",
      "Jukun",
      "Okrika",
      "Are you well?"
    ],
    "answer": "Are you well?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is spoken in the Niger-Congo family and uses 'mi' for 'I'?",
    "options": [
      "Tiv",
      "Gwari",
      "Volta\u2013Niger",
      "Yoruba"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which northern minority language is mostly oral and lacks standardised writing?",
    "options": [
      "Okrika",
      "Gwari",
      "Benue-Congo",
      "Ndokwa"
    ],
    "answer": "Gwari"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language uses 'Kedu' as a common greeting?",
    "options": [
      "Igbo",
      "Kwara Yoruba",
      "Efik",
      "Thank you"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is traditionally whistled for secret communication?",
    "options": [
      "Edoid",
      "Yoruba",
      "Ndokwa",
      "Efik"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Nagode' in Hausa?",
    "options": [
      "Ejagham",
      "Adamawa Fulfulde",
      "Tone marking",
      "Thank you"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is spoken by the Idoma people?",
    "options": [
      "Pronunciation and lexical variation",
      "Idoma",
      "Kwara Yoruba",
      "Ejagham"
    ],
    "answer": "Idoma"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language group includes Itsekiri, Urhobo, and Isoko?",
    "options": [
      "Tiv",
      "Edoid",
      "Jarawa",
      "Yoruba"
    ],
    "answer": "Edoid"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language uses click sounds borrowed from neighbouring groups?",
    "options": [
      "Tiv",
      "Did you sleep well?",
      "Yoruba",
      "Jarawa"
    ],
    "answer": "Jarawa"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the predominant language in the city of Makurdi?",
    "options": [
      "Senegambian",
      "Tiv",
      "Igbo",
      "What are you doing?"
    ],
    "answer": "Tiv"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language is used in the Tiv folktale tradition?",
    "options": [
      "Yoruba",
      "Okrika",
      "Tiv",
      "Are you well?"
    ],
    "answer": "Tiv"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which ethnic group speaks the Ukwuani language?",
    "options": [
      "Kwara Yoruba",
      "Yoruba",
      "Ndokwa",
      "Idoma"
    ],
    "answer": "Ndokwa"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the meaning of 'Bawo ni?' in Yoruba?",
    "options": [
      "Ijaw",
      "What are you doing?",
      "How are you?",
      "Efik/Ibibio"
    ],
    "answer": "How are you?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What does 'Me ka wo ya?' mean in Hausa?",
    "options": [
      "Efik",
      "Hausa",
      "What are you doing?",
      "Idoma"
    ],
    "answer": "What are you doing?"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language family does Fulfulde belong to?",
    "options": [
      "Gwari",
      "What are you doing?",
      "Senegambian",
      "Benue-Congo"
    ],
    "answer": "Senegambian"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "What is the primary dialect of Fulani spoken in Nigeria?",
    "options": [
      "Adamawa Fulfulde",
      "Benue-Congo",
      "Berom",
      "Tiv"
    ],
    "answer": "Adamawa Fulfulde"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language is closely related to Igala?",
    "options": [
      "Tiv",
      "Kwara Yoruba",
      "Yoruba",
      "Idoma"
    ],
    "answer": "Idoma"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which minority language is spoken in Plateau State and has over 20 dialects?",
    "options": [
      "Berom",
      "Kanuri",
      "Okrika",
      "Igbo"
    ],
    "answer": "Berom"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which language spoken in Rivers State is considered part of the Ijaw cluster?",
    "options": [
      "Okrika",
      "Thank you",
      "Jukun",
      "Hausa"
    ],
    "answer": "Okrika"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language has had Christian religious texts translated since the 1800s?",
    "options": [
      "Efik",
      "Yoruba",
      "Okrika",
      "Benue-Congo"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Hard",
    "question": "Which Nigerian language was used in early missionary education in southeastern Nigeria?",
    "options": [
      "Yoruba",
      "Igbo",
      "Efik",
      "Tiv"
    ],
    "answer": "Efik"
  },


  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Good morning' in Yoruba?",
    "options": [
      "Ẹ kaaro",
      "Iṣẹ",
      "You",
      "Urhobo"
    ],
    "answer": "Ẹ kaaro"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Sannu' mean in Hausa?",
    "options": [
      "Ruwa",
      "Hello",
      "Good evening",
      "Many"
    ],
    "answer": "Hello"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Kedu' mean in Igbo?",
    "options": [
      "Thank you",
      "How are you?",
      "Husband",
      "Ijoid"
    ],
    "answer": "How are you?"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language is spoken by the Kalabari people?",
    "options": [
      "God",
      "Zauna",
      "Insult",
      "Ijaw"
    ],
    "answer": "Ijaw"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language group does Tiv belong to?",
    "options": [
      "Benue–Congo",
      "Good day",
      "Nwa",
      "Hut or house"
    ],
    "answer": "Benue–Congo"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ẹ ṣe' in Yoruba?",
    "options": [
      "Hut or house",
      "It is good",
      "Thank you",
      "Nupe"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "How do you say 'Come here' in Igbo?",
    "options": [
      "Bịa ebe a",
      "Zauna",
      "Good evening",
      "Hello"
    ],
    "answer": "Bịa ebe a"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Nagode' mean in Hausa?",
    "options": [
      "It’s none of your business",
      "Ile",
      "Thank you",
      "Ijaw"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which tribe speaks the Nupe language?",
    "options": [
      "How are you?",
      "Nupe",
      "Efik",
      "Good evening"
    ],
    "answer": "Nupe"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language is spoken by the Efik people?",
    "options": [
      "Benue–Congo",
      "Husband",
      "Ijaw",
      "Efik"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ina kwana' mean in Hausa?",
    "options": [
      "Insult",
      "It is good",
      "Good morning",
      "Good afternoon"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ọtụtụ' in Igbo?",
    "options": [
      "Many",
      "Thank you",
      "Iṣẹ",
      "Efik"
    ],
    "answer": "Many"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which ethnic group speaks the Urhobo language?",
    "options": [
      "Hausa",
      "God",
      "Eyen",
      "Urhobo"
    ],
    "answer": "Urhobo"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for 'house'?",
    "options": [
      "Ile",
      "Efik",
      "Hausa",
      "Father"
    ],
    "answer": "Ile"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Hausa word for 'water'?",
    "options": [
      "Husband",
      "Ruwa",
      "Bịa ebe a",
      "Good day"
    ],
    "answer": "Ruwa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Obi' in Igbo?",
    "options": [
      "Nwa",
      "Hut or house",
      "Ijaw",
      "You"
    ],
    "answer": "Hut or house"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ba ruwa da kai' mean in Hausa?",
    "options": [
      "World",
      "Many",
      "It’s none of your business",
      "Hut or house"
    ],
    "answer": "It’s none of your business"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the meaning of 'Ọkọ' in Yoruba?",
    "options": [
      "Good afternoon",
      "Urhobo",
      "Husband",
      "Ruwa"
    ],
    "answer": "Husband"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language uses the word 'Iba' for 'fever'?",
    "options": [
      "Insult",
      "Yoruba",
      "World",
      "Nupe"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Nna' in Igbo?",
    "options": [
      "Ile",
      "Many",
      "Father",
      "Iṣẹ"
    ],
    "answer": "Father"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses the word 'Ayi' to mean 'we'?",
    "options": [
      "Efik",
      "All major Nigerian languages",
      "Thank you",
      "Pidgin English"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which tribe uses the word 'Dakata' to mean 'wait'?",
    "options": [
      "It is good",
      "Today",
      "Hausa",
      "All major Nigerian languages"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ẹ kaasan' mean in Yoruba?",
    "options": [
      "All major Nigerian languages",
      "Efik",
      "Iṣẹ",
      "Good afternoon"
    ],
    "answer": "Good afternoon"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language uses tone to differentiate meaning?",
    "options": [
      "Thank you",
      "Iṣẹ",
      "Ruwa",
      "All major Nigerian languages"
    ],
    "answer": "All major Nigerian languages"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Igbo word for 'child'?",
    "options": [
      "Enyi",
      "Good day",
      "Nwa",
      "Insult"
    ],
    "answer": "Nwa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Shege' mean in Hausa slang?",
    "options": [
      "Good evening",
      "Ọjà",
      "Good afternoon",
      "Insult"
    ],
    "answer": "Insult"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses 'Idem mfo' to say 'My body'?",
    "options": [
      "God",
      "Husband",
      "Urhobo",
      "Efik"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for 'food'?",
    "options": [
      "Good morning",
      "Hausa",
      "I understand Hausa",
      "Ounje"
    ],
    "answer": "Ounje"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ụbọchị ọma' in Igbo?",
    "options": [
      "Ọjà",
      "Good day",
      "Good morning",
      "Efik/Ibibio"
    ],
    "answer": "Good day"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "How do you say 'Sit down' in Hausa?",
    "options": [
      "Zauna",
      "Urhobo",
      "Nupe",
      "Eyen"
    ],
    "answer": "Zauna"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language uses 'Wahala' as slang?",
    "options": [
      "It is good",
      "Efik",
      "Pidgin English",
      "Good afternoon"
    ],
    "answer": "Pidgin English"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the word for 'market' in Yoruba?",
    "options": [
      "Sky or King",
      "Ọjà",
      "Efik",
      "Nwa"
    ],
    "answer": "Ọjà"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ẹ kaalẹ' in Yoruba?",
    "options": [
      "Iṣẹ",
      "Good evening",
      "Ruwa",
      "Insult"
    ],
    "answer": "Good evening"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Yau' in Hausa?",
    "options": [
      "Many",
      "God",
      "Today",
      "Sky or King"
    ],
    "answer": "Today"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Igbo word for 'friend'?",
    "options": [
      "Enyi",
      "Ijoid",
      "Ẹ kaaro",
      "Bịa ebe a"
    ],
    "answer": "Enyi"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Kai' mean in Hausa?",
    "options": [
      "It is good",
      "You",
      "Efik/Ibibio",
      "God"
    ],
    "answer": "You"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language group does Ijaw belong to?",
    "options": [
      "Efik",
      "Ijoid",
      "World",
      "Nupe"
    ],
    "answer": "Ijoid"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Igwe' in Igbo?",
    "options": [
      "Sky or King",
      "Insult",
      "Enyi",
      "Ruwa"
    ],
    "answer": "Sky or King"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses 'Abasi' for God?",
    "options": [
      "Efik",
      "Husband",
      "Efik/Ibibio",
      "Nupe"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Duniya' in Hausa?",
    "options": [
      "Ruwa",
      "Hausa",
      "World",
      "Ẹ kaaro"
    ],
    "answer": "World"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ọlọrun' in Yoruba?",
    "options": [
      "Good day",
      "It is good",
      "Nwa",
      "God"
    ],
    "answer": "God"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'O di mma' mean in Igbo?",
    "options": [
      "Efik",
      "Hausa",
      "Ijaw",
      "It is good"
    ],
    "answer": "It is good"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses 'Yawuri' as a dialect?",
    "options": [
      "Hausa",
      "I understand Hausa",
      "Nupe",
      "Bịa ebe a"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Efik word for 'child'?",
    "options": [
      "Many",
      "Thank you",
      "Eyen",
      "Hut or house"
    ],
    "answer": "Eyen"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for 'work'?",
    "options": [
      "Iṣẹ",
      "Good evening",
      "Hello",
      "Ijaw"
    ],
    "answer": "Iṣẹ"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ina jin Hausa' mean?",
    "options": [
      "Good afternoon",
      "I understand Hausa",
      "Bịa ebe a",
      "Hut or house"
    ],
    "answer": "I understand Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Good morning' in Yoruba?",
    "options": [
      "Ẹ kaaro",
      "All major Nigerian languages",
      "Good afternoon",
      "I understand Hausa"
    ],
    "answer": "Ẹ kaaro"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Sannu' mean in Hausa?",
    "options": [
      "Good day",
      "Urhobo",
      "Efik/Ibibio",
      "Hello"
    ],
    "answer": "Hello"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Kedu' mean in Igbo?",
    "options": [
      "Thank you",
      "Husband",
      "Father",
      "How are you?"
    ],
    "answer": "How are you?"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language is spoken by the Kalabari people?",
    "options": [
      "Pidgin English",
      "Insult",
      "Ijaw",
      "Ounje"
    ],
    "answer": "Ijaw"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language group does Tiv belong to?",
    "options": [
      "Nwa",
      "Good afternoon",
      "Iṣẹ",
      "Benue–Congo"
    ],
    "answer": "Benue–Congo"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ẹ ṣe' in Yoruba?",
    "options": [
      "Thank you",
      "Hausa",
      "It’s none of your business",
      "Bịa ebe a"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "How do you say 'Come here' in Igbo?",
    "options": [
      "Iṣẹ",
      "Bịa ebe a",
      "Efik",
      "Good afternoon"
    ],
    "answer": "Bịa ebe a"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Nagode' mean in Hausa?",
    "options": [
      "Thank you",
      "Nupe",
      "Eyen",
      "Many"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which tribe speaks the Nupe language?",
    "options": [
      "Nupe",
      "Hut or house",
      "Ijoid",
      "Good day"
    ],
    "answer": "Nupe"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language is spoken by the Efik people?",
    "options": [
      "Many",
      "It is good",
      "Efik",
      "Urhobo"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ina kwana' mean in Hausa?",
    "options": [
      "Ounje",
      "Good morning",
      "Enyi",
      "Iṣẹ"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ọtụtụ' in Igbo?",
    "options": [
      "Zauna",
      "God",
      "Thank you",
      "Many"
    ],
    "answer": "Many"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which ethnic group speaks the Urhobo language?",
    "options": [
      "Urhobo",
      "Ruwa",
      "Ile",
      "Pidgin English"
    ],
    "answer": "Urhobo"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for 'house'?",
    "options": [
      "Yoruba",
      "Ile",
      "Bịa ebe a",
      "Good evening"
    ],
    "answer": "Ile"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Hausa word for 'water'?",
    "options": [
      "How are you?",
      "Insult",
      "Pidgin English",
      "Ruwa"
    ],
    "answer": "Ruwa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Obi' in Igbo?",
    "options": [
      "Urhobo",
      "Iṣẹ",
      "Father",
      "Hut or house"
    ],
    "answer": "Hut or house"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ba ruwa da kai' mean in Hausa?",
    "options": [
      "Nwa",
      "Hausa",
      "Urhobo",
      "It’s none of your business"
    ],
    "answer": "It’s none of your business"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the meaning of 'Ọkọ' in Yoruba?",
    "options": [
      "Bịa ebe a",
      "Husband",
      "Father",
      "How are you?"
    ],
    "answer": "Husband"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language uses the word 'Iba' for 'fever'?",
    "options": [
      "Yoruba",
      "Thank you",
      "Enyi",
      "Hut or house"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Nna' in Igbo?",
    "options": [
      "Ijoid",
      "Father",
      "Eyen",
      "Efik/Ibibio"
    ],
    "answer": "Father"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses the word 'Ayi' to mean 'we'?",
    "options": [
      "Ounje",
      "Ẹ kaaro",
      "Sky or King",
      "Efik"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which tribe uses the word 'Dakata' to mean 'wait'?",
    "options": [
      "How are you?",
      "Hausa",
      "Hello",
      "Benue–Congo"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Ẹ kaasan' mean in Yoruba?",
    "options": [
      "Benue–Congo",
      "All major Nigerian languages",
      "How are you?",
      "Good afternoon"
    ],
    "answer": "Good afternoon"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language uses tone to differentiate meaning?",
    "options": [
      "How are you?",
      "All major Nigerian languages",
      "Efik",
      "Ruwa"
    ],
    "answer": "All major Nigerian languages"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Igbo word for 'child'?",
    "options": [
      "Efik",
      "Ijoid",
      "Nwa",
      "Bịa ebe a"
    ],
    "answer": "Nwa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Shege' mean in Hausa slang?",
    "options": [
      "Urhobo",
      "Thank you",
      "Insult",
      "Iṣẹ"
    ],
    "answer": "Insult"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses 'Idem mfo' to say 'My body'?",
    "options": [
      "All major Nigerian languages",
      "Sky or King",
      "It is good",
      "Efik"
    ],
    "answer": "Efik"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Yoruba word for 'food'?",
    "options": [
      "Urhobo",
      "Nwa",
      "Ounje",
      "Efik"
    ],
    "answer": "Ounje"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ụbọchị ọma' in Igbo?",
    "options": [
      "Nupe",
      "Father",
      "Good day",
      "Many"
    ],
    "answer": "Good day"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "How do you say 'Sit down' in Hausa?",
    "options": [
      "Zauna",
      "Insult",
      "Benue–Congo",
      "Hausa"
    ],
    "answer": "Zauna"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which Nigerian language uses 'Wahala' as slang?",
    "options": [
      "How are you?",
      "Insult",
      "Hausa",
      "Pidgin English"
    ],
    "answer": "Pidgin English"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the word for 'market' in Yoruba?",
    "options": [
      "All major Nigerian languages",
      "You",
      "Ọjà",
      "Insult"
    ],
    "answer": "Ọjà"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ẹ kaalẹ' in Yoruba?",
    "options": [
      "Urhobo",
      "Good evening",
      "Sky or King",
      "Enyi"
    ],
    "answer": "Good evening"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Yau' in Hausa?",
    "options": [
      "Efik/Ibibio",
      "Thank you",
      "Today",
      "Nupe"
    ],
    "answer": "Today"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Igbo word for 'friend'?",
    "options": [
      "Hausa",
      "Many",
      "Enyi",
      "Good evening"
    ],
    "answer": "Enyi"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'Kai' mean in Hausa?",
    "options": [
      "God",
      "Good day",
      "You",
      "Sky or King"
    ],
    "answer": "You"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language group does Ijaw belong to?",
    "options": [
      "God",
      "Benue–Congo",
      "Ọjà",
      "Ijoid"
    ],
    "answer": "Ijoid"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Igwe' in Igbo?",
    "options": [
      "Iṣẹ",
      "Efik",
      "Sky or King",
      "Nupe"
    ],
    "answer": "Sky or King"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses 'Abasi' for God?",
    "options": [
      "You",
      "Efik/Ibibio",
      "Efik",
      "Thank you"
    ],
    "answer": "Efik/Ibibio"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Duniya' in Hausa?",
    "options": [
      "Nupe",
      "Good evening",
      "World",
      "Thank you"
    ],
    "answer": "World"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is 'Ọlọrun' in Yoruba?",
    "options": [
      "Ile",
      "Hello",
      "God",
      "Nwa"
    ],
    "answer": "God"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What does 'O di mma' mean in Igbo?",
    "options": [
      "Father",
      "How are you?",
      "It is good",
      "Today"
    ],
    "answer": "It is good"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "Which language uses 'Yawuri' as a dialect?",
    "options": [
      "Ẹ kaaro",
      "Good morning",
      "Hausa",
      "Good afternoon"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Medium",
    "question": "What is the Efik word for 'child'?",
    "options": [
      "Husband",
      "Iṣẹ",
      "Nwa",
      "Eyen"
    ],
    "answer": "Eyen"
  },

  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Kedu' mean in Igbo?",
    "options": [
      "Hello",
      "Cheek",
      "Sai anjima",
      "Thank you"
    ],
    "answer": "Hello"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ẹ kaaro' in Yoruba?",
    "options": [
      "Good morning",
      "Ci",
      "Ẹ káàsán",
      "Welcome"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Sannu' mean in Hausa?",
    "options": [
      "Hello",
      "Day",
      "Sun",
      "Good evening"
    ],
    "answer": "Hello"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Thank you' in Yoruba?",
    "options": [
      "Ẹ ṣé",
      "My friend",
      "Hausa",
      "Ina zaki?"
    ],
    "answer": "Ẹ ṣé"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Water' in Hausa?",
    "options": [
      "Ci",
      "Nne",
      "Rárá",
      "Ruwa"
    ],
    "answer": "Ruwa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you greet 'Good afternoon' in Yoruba?",
    "options": [
      "Ẹ káàsán",
      "Welcome",
      "Compound",
      "Sun"
    ],
    "answer": "Ẹ káàsán"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Ina kwana' mean in Hausa?",
    "options": [
      "Bẹ́ẹ̀ni",
      "Ina zaki?",
      "Good morning",
      "Nne"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Nagode' mean in Hausa?",
    "options": [
      "Ruwa",
      "Thank you",
      "Ẹ káàsán",
      "Yoruba"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ounje' in Yoruba?",
    "options": [
      "Food",
      "Hello",
      "Good morning",
      "Hausa"
    ],
    "answer": "Food"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Igbo word for 'Child'?",
    "options": [
      "House",
      "Jọ̀wọ́",
      "Ẹ ṣé",
      "Nwa"
    ],
    "answer": "Nwa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language uses 'Obi' for house?",
    "options": [
      "Igbo",
      "Ci",
      "Bẹ́ẹ̀ni",
      "Compound"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Yes' in Yoruba?",
    "options": [
      "Time",
      "Bẹ́ẹ̀ni",
      "Journey",
      "Good evening"
    ],
    "answer": "Bẹ́ẹ̀ni"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ile' in Yoruba?",
    "options": [
      "House",
      "Nne",
      "Nri",
      "My friend"
    ],
    "answer": "House"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which Nigerian language uses 'Ẹ káalẹ'?",
    "options": [
      "Ẹ káàsán",
      "Compound",
      "Yoruba",
      "Father"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Nna' in Igbo?",
    "options": [
      "Hausa",
      "My friend",
      "Ọkùnrin",
      "Father"
    ],
    "answer": "Father"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'No' in Yoruba?",
    "options": [
      "Jọ̀wọ́",
      "Rárá",
      "Hello",
      "Cheek"
    ],
    "answer": "Rárá"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language says 'Zauna' to mean sit?",
    "options": [
      "House",
      "Time",
      "Hausa",
      "Ọrun"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Ẹ káalẹ' mean in Yoruba?",
    "options": [
      "Good evening",
      "Jọ̀wọ́",
      "Ruwa",
      "House"
    ],
    "answer": "Good evening"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ọjọ́' in Yoruba?",
    "options": [
      "Compound",
      "Day",
      "Time",
      "Ruwa"
    ],
    "answer": "Day"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Mother' in Igbo?",
    "options": [
      "Lafiya lau?",
      "Nne",
      "Rárá",
      "Children"
    ],
    "answer": "Nne"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which tribe speaks the Yoruba language?",
    "options": [
      "Compound",
      "Yoruba",
      "Sun",
      "Hello"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'How are you?' in Hausa?",
    "options": [
      "Lafiya lau?",
      "Sun",
      "Father",
      "Good morning"
    ],
    "answer": "Lafiya lau?"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Hausa word for 'Goodbye'?",
    "options": [
      "Sai anjima",
      "Igbo",
      "Ẹ ṣé",
      "Children"
    ],
    "answer": "Sai anjima"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ọjọ́bọ' in Yoruba?",
    "options": [
      "Nne",
      "Good evening",
      "Thursday",
      "Hello"
    ],
    "answer": "Thursday"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ulo' in Igbo?",
    "options": [
      "Ci",
      "Ọkùnrin",
      "Lafiya lau?",
      "House"
    ],
    "answer": "House"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Friend' in Yoruba?",
    "options": [
      "Igbo",
      "Ọrẹ",
      "Lafiya lau?",
      "Compound"
    ],
    "answer": "Ọrẹ"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Yoruba word for 'Man'?",
    "options": [
      "Ọkùnrin",
      "Ẹ káàsán",
      "Hausa",
      "Hello"
    ],
    "answer": "Ọkùnrin"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Come' in Yoruba?",
    "options": [
      "Father",
      "Bẹ́ẹ̀ni",
      "Yoruba",
      "Wá"
    ],
    "answer": "Wá"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Igbo word for 'Food'?",
    "options": [
      "Food",
      "Thank you",
      "Ina zaki?",
      "Nri"
    ],
    "answer": "Nri"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Abokina' mean in Hausa?",
    "options": [
      "Wá",
      "Igbo",
      "My friend",
      "Lafiya lau?"
    ],
    "answer": "My friend"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ẹrẹkẹ́' in Yoruba?",
    "options": [
      "Cheek",
      "Ọkùnrin",
      "Jọ̀wọ́",
      "Sai anjima"
    ],
    "answer": "Cheek"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ọmọ' in Yoruba?",
    "options": [
      "Hausa",
      "Nwa",
      "Welcome",
      "Child"
    ],
    "answer": "Child"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Tafiya' in Hausa?",
    "options": [
      "Child",
      "Journey",
      "Hausa",
      "Ruwa"
    ],
    "answer": "Journey"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language uses 'Ndo' to mean sorry?",
    "options": [
      "Hello",
      "Sun",
      "Igbo",
      "Cheek"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Eat' in Hausa?",
    "options": [
      "Ci",
      "Good evening",
      "Compound",
      "Jọ̀wọ́"
    ],
    "answer": "Ci"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Yoruba word for 'Sleep'?",
    "options": [
      "Father",
      "Sun",
      "Food",
      "Ci"
    ],
    "answer": "Sun"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Umuaka' mean in Igbo?",
    "options": [
      "Igbo",
      "Child",
      "Hausa",
      "Children"
    ],
    "answer": "Children"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language says 'Ina yini' for greeting?",
    "options": [
      "Day",
      "Hausa",
      "Journey",
      "Ẹ ṣé"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'I am fine' in Yoruba?",
    "options": [
      "Ẹ káàsán",
      "Mo wà dáadáa",
      "House",
      "Thank you"
    ],
    "answer": "Mo wà dáadáa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Oge' in Igbo?",
    "options": [
      "Lafiya lau?",
      "Yoruba",
      "Ẹ ṣé",
      "Time"
    ],
    "answer": "Time"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Kaabo' mean in Yoruba?",
    "options": [
      "Cheek",
      "Time",
      "Nne",
      "Welcome"
    ],
    "answer": "Welcome"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Where are you going?' in Hausa?",
    "options": [
      "Rárá",
      "Welcome",
      "Igbo",
      "Ina zaki?"
    ],
    "answer": "Ina zaki?"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Yoruba word for 'Sky'?",
    "options": [
      "Hausa",
      "Child",
      "Ọrun",
      "Thursday"
    ],
    "answer": "Ọrun"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Please' in Yoruba?",
    "options": [
      "Hausa",
      "Nri",
      "Ci",
      "Jọ̀wọ́"
    ],
    "answer": "Jọ̀wọ́"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ezi' in Igbo?",
    "options": [
      "Children",
      "Compound",
      "Nwa",
      "Bẹ́ẹ̀ni"
    ],
    "answer": "Compound"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Kedu' mean in Igbo?",
    "options": [
      "Hello",
      "Father",
      "Igbo",
      "House"
    ],
    "answer": "Hello"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ẹ kaaro' in Yoruba?",
    "options": [
      "Ina zaki?",
      "Child",
      "Good morning",
      "Ẹ káàsán"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Sannu' mean in Hausa?",
    "options": [
      "Lafiya lau?",
      "Sai anjima",
      "Ọkùnrin",
      "Hello"
    ],
    "answer": "Hello"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Thank you' in Yoruba?",
    "options": [
      "Wá",
      "Ẹ ṣé",
      "Nne",
      "Thank you"
    ],
    "answer": "Ẹ ṣé"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Water' in Hausa?",
    "options": [
      "Thank you",
      "Sai anjima",
      "Ruwa",
      "Igbo"
    ],
    "answer": "Ruwa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you greet 'Good afternoon' in Yoruba?",
    "options": [
      "Welcome",
      "Sun",
      "Hello",
      "Ẹ káàsán"
    ],
    "answer": "Ẹ káàsán"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Ina kwana' mean in Hausa?",
    "options": [
      "Good morning",
      "Welcome",
      "Time",
      "Nwa"
    ],
    "answer": "Good morning"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Nagode' mean in Hausa?",
    "options": [
      "Thank you",
      "Igbo",
      "Good morning",
      "House"
    ],
    "answer": "Thank you"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ounje' in Yoruba?",
    "options": [
      "Cheek",
      "Sun",
      "House",
      "Food"
    ],
    "answer": "Food"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Igbo word for 'Child'?",
    "options": [
      "Cheek",
      "Ẹ káàsán",
      "Time",
      "Nwa"
    ],
    "answer": "Nwa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language uses 'Obi' for house?",
    "options": [
      "Bẹ́ẹ̀ni",
      "Child",
      "Igbo",
      "Hello"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Yes' in Yoruba?",
    "options": [
      "Time",
      "Bẹ́ẹ̀ni",
      "Mo wà dáadáa",
      "Compound"
    ],
    "answer": "Bẹ́ẹ̀ni"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ile' in Yoruba?",
    "options": [
      "Good morning",
      "Lafiya lau?",
      "Sun",
      "House"
    ],
    "answer": "House"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which Nigerian language uses 'Ẹ káalẹ'?",
    "options": [
      "Good morning",
      "Sun",
      "Yoruba",
      "Thank you"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Nna' in Igbo?",
    "options": [
      "Father",
      "Time",
      "Ruwa",
      "Thursday"
    ],
    "answer": "Father"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'No' in Yoruba?",
    "options": [
      "Thank you",
      "Ina zaki?",
      "Rárá",
      "Wá"
    ],
    "answer": "Rárá"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language says 'Zauna' to mean sit?",
    "options": [
      "Hausa",
      "Sai anjima",
      "Yoruba",
      "Ruwa"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Ẹ káalẹ' mean in Yoruba?",
    "options": [
      "Ẹ ṣé",
      "Good evening",
      "Rárá",
      "Mo wà dáadáa"
    ],
    "answer": "Good evening"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ọjọ́' in Yoruba?",
    "options": [
      "Day",
      "Father",
      "Hausa",
      "Mo wà dáadáa"
    ],
    "answer": "Day"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Mother' in Igbo?",
    "options": [
      "Ci",
      "Ọrẹ",
      "Nne",
      "Children"
    ],
    "answer": "Nne"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which tribe speaks the Yoruba language?",
    "options": [
      "Nri",
      "Mo wà dáadáa",
      "Yoruba",
      "Sai anjima"
    ],
    "answer": "Yoruba"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'How are you?' in Hausa?",
    "options": [
      "Igbo",
      "Lafiya lau?",
      "Time",
      "Yoruba"
    ],
    "answer": "Lafiya lau?"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Hausa word for 'Goodbye'?",
    "options": [
      "Ẹ káàsán",
      "Igbo",
      "Sai anjima",
      "Hello"
    ],
    "answer": "Sai anjima"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ọjọ́bọ' in Yoruba?",
    "options": [
      "House",
      "Compound",
      "Good morning",
      "Thursday"
    ],
    "answer": "Thursday"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ulo' in Igbo?",
    "options": [
      "Journey",
      "Sun",
      "House",
      "Hausa"
    ],
    "answer": "House"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Friend' in Yoruba?",
    "options": [
      "Hello",
      "Ọrẹ",
      "Lafiya lau?",
      "Ruwa"
    ],
    "answer": "Ọrẹ"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Yoruba word for 'Man'?",
    "options": [
      "Ọkùnrin",
      "Food",
      "Thank you",
      "Good morning"
    ],
    "answer": "Ọkùnrin"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Come' in Yoruba?",
    "options": [
      "Good evening",
      "Igbo",
      "Wá",
      "Ọkùnrin"
    ],
    "answer": "Wá"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Igbo word for 'Food'?",
    "options": [
      "Hello",
      "Nri",
      "Child",
      "Sai anjima"
    ],
    "answer": "Nri"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Abokina' mean in Hausa?",
    "options": [
      "Wá",
      "Ọrẹ",
      "Ẹ káàsán",
      "My friend"
    ],
    "answer": "My friend"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ẹrẹkẹ́' in Yoruba?",
    "options": [
      "Compound",
      "House",
      "Cheek",
      "Mo wà dáadáa"
    ],
    "answer": "Cheek"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ọmọ' in Yoruba?",
    "options": [
      "Child",
      "Igbo",
      "Yoruba",
      "Lafiya lau?"
    ],
    "answer": "Child"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Tafiya' in Hausa?",
    "options": [
      "Ina zaki?",
      "Welcome",
      "Journey",
      "Ọrẹ"
    ],
    "answer": "Journey"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language uses 'Ndo' to mean sorry?",
    "options": [
      "Nne",
      "Sun",
      "Nri",
      "Igbo"
    ],
    "answer": "Igbo"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Eat' in Hausa?",
    "options": [
      "Yoruba",
      "Ci",
      "Hausa",
      "Bẹ́ẹ̀ni"
    ],
    "answer": "Ci"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Yoruba word for 'Sleep'?",
    "options": [
      "Lafiya lau?",
      "Sun",
      "Ọrẹ",
      "My friend"
    ],
    "answer": "Sun"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Umuaka' mean in Igbo?",
    "options": [
      "Good evening",
      "Welcome",
      "Children",
      "Good morning"
    ],
    "answer": "Children"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "Which language says 'Ina yini' for greeting?",
    "options": [
      "Bẹ́ẹ̀ni",
      "Welcome",
      "Hausa",
      "Ọrẹ"
    ],
    "answer": "Hausa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'I am fine' in Yoruba?",
    "options": [
      "Ruwa",
      "Hello",
      "Mo wà dáadáa",
      "Children"
    ],
    "answer": "Mo wà dáadáa"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Oge' in Igbo?",
    "options": [
      "House",
      "Compound",
      "Time",
      "Day"
    ],
    "answer": "Time"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What does 'Kaabo' mean in Yoruba?",
    "options": [
      "Hausa",
      "Good morning",
      "Igbo",
      "Welcome"
    ],
    "answer": "Welcome"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Where are you going?' in Hausa?",
    "options": [
      "Igbo",
      "Ọrẹ",
      "Ina zaki?",
      "Ọrun"
    ],
    "answer": "Ina zaki?"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is the Yoruba word for 'Sky'?",
    "options": [
      "Good morning",
      "Ọrun",
      "Mo wà dáadáa",
      "Sai anjima"
    ],
    "answer": "Ọrun"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "How do you say 'Please' in Yoruba?",
    "options": [
      "Ci",
      "Jọ̀wọ́",
      "Sai anjima",
      "Sun"
    ],
    "answer": "Jọ̀wọ́"
  },
  {
    "category": "Languages",
    "difficulty": "Easy",
    "question": "What is 'Ezi' in Igbo?",
    "options": [
      "Lafiya lau?",
      "My friend",
      "Child",
      "Compound"
    ],
    "answer": "Compound"
  },



  {
    category: "Geography",
    difficulty: "Easy",
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Ibadan", "Port Harcourt"],
    answer: "Abuja"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
    {
    category: "Geography",
    difficulty: "Easy",
    question: "Which state is known for the Olumo Rock?",
    options: ["Osun", "Ogun", "Ondo", "Ekiti"],
    answer: "Ogun"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Where is the Obudu Mountain Resort located?",
    options: ["Cross River", "Plateau", "Taraba", "Enugu"],
    answer: "Cross River"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which river joins the River Niger at Lokoja?",
    options: ["Ogun", "Benue", "Kaduna", "Osun"],
    answer: "Benue"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "What is the highest mountain in Nigeria?",
    options: ["Obudu Hills", "Chappal Waddi", "Mambilla", "Jos Plateau"],
    answer: "Chappal Waddi"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which state has the highest number of local governments?",
    options: ["Kano", "Lagos", "Oyo", "Kaduna"],
    answer: "Kano"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Where is Erin Ijesha Waterfall?",
    options: ["Ekiti", "Kogi", "Osun", "Ondo"],
    answer: "Osun"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which Nigerian state is known for the Yankari Game Reserve?",
    options: ["Bauchi", "Borno", "Yobe", "Gombe"],
    answer: "Bauchi"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which city is known as the Coal City?",
    options: ["Enugu", "Jos", "Ibadan", "Lokoja"],
    answer: "Enugu"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which state shares borders with Benin Republic?",
    options: ["Lagos", "Ogun", "Kwara", "All of the above"],
    answer: "All of the above"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "What is the official name of Nigeria?",
    options: ["Federal Republic of Nigeria", "Republic of Nigeria", "Naija Nation", "Nigeria"],
    answer: "Federal Republic of Nigeria"
  },
  
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which state is nicknamed the ‘Centre of Excellence’?",
    options: ["Kano", "Lagos", "Oyo", "Kaduna"],
    answer: "Lagos"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Where is the Zuma Rock located?",
    options: ["Abuja", "Kaduna", "Niger State", "Enugu"],
    answer: "Niger State"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which Nigerian state is the largest by landmass?",
    options: ["Niger", "Borno", "Kano", "Oyo"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Ibadan", "Port Harcourt"],
    answer: "Abuja"
  },
  {
    category: "Geography",
    difficulty: "Easy",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Where is the Zuma Rock located?",
    options: ["Abuja", "Kaduna", "Niger State", "Enugu"],
    answer: "Niger State"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Which state is nicknamed the ‘Centre of Excellence’?",
    options: ["Kano", "Lagos", "Oyo", "Kaduna"],
    answer: "Lagos"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Which state is nicknamed the ‘Centre of Excellence’?",
    options: ["Kano", "Lagos", "Oyo", "Kaduna"],
    answer: "Lagos"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Where is the Zuma Rock located?",
    options: ["Abuja", "Kaduna", "Niger State", "Enugu"],
    answer: "Niger State"
  },
  {
    category: "Geography",
    difficulty: "Medium",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Hard",
    question: "Which state is nicknamed the ‘Centre of Excellence’?",
    options: ["Kano", "Lagos", "Oyo", "Kaduna"],
    answer: "Lagos"
  },
  {
    category: "Geography",
    difficulty: "Hard",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Hard",
    question: "Which Nigerian state is the largest by landmass?",
    options: ["Niger", "Borno", "Kano", "Oyo"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Hard",
    question: "Which state is nicknamed the ‘Centre of Excellence’?",
    options: ["Kano", "Lagos", "Oyo", "Kaduna"],
    answer: "Lagos"
  },
  {
    category: "Geography",
    difficulty: "Hard",
    question: "Which river is the longest in Nigeria?",
    options: ["Ogun", "Benue", "Niger", "Osun"],
    answer: "Niger"
  },
  {
    category: "Geography",
    difficulty: "Hard",
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Abuja", "Ibadan", "Port Harcourt"],
    answer: "Abuja"

  },


  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the longest river entirely within Nigeria?",
    "options": [
      "River Kaduna",
      "Bonny Island",
      "Yankari National Park",
      "Sahel"
    ],
    "answer": "River Kaduna"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state has the highest number of local government areas?",
    "options": [
      "Borno",
      "River Niger",
      "Kano",
      "Yankari National Park"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state shares boundaries with the most other Nigerian states?",
    "options": [
      "Northeast",
      "Lokoja",
      "Kogi",
      "Approximately 6.5°N"
    ],
    "answer": "Kogi"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the latitude of Nigeria's northernmost point?",
    "options": [
      "An aulacogen",
      "Around 13°N",
      "Imo River estuary",
      "Cross River"
    ],
    "answer": "Around 13°N"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian lake has drastically shrunk due to climate change?",
    "options": [
      "Lake Chad",
      "Granite",
      "Sahel",
      "Borno"
    ],
    "answer": "Lake Chad"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the name of the volcanic plateau in central Nigeria?",
    "options": [
      "Lower Usuma Dam",
      "River Niger",
      "Borno",
      "Jos Plateau"
    ],
    "answer": "Jos Plateau"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian river is a tributary of the River Niger and flows through the southwest?",
    "options": [
      "Kano",
      "Confluence of Rivers Niger and Benue",
      "Yankari National Park",
      "River Ogun"
    ],
    "answer": "River Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state in Nigeria is nicknamed the 'Confluence State'?",
    "options": [
      "Borno",
      "Kogi",
      "Sahel",
      "Bukuru"
    ],
    "answer": "Kogi"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the name of the southernmost point of Nigeria?",
    "options": [
      "Jos Plateau",
      "Chappal Waddi",
      "Northeast",
      "Imo River estuary"
    ],
    "answer": "Imo River estuary"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state contains the Obudu Mountain Resort?",
    "options": [
      "Mandara Mountains",
      "Gashaka Gumti National Park",
      "Calabar",
      "Cross River"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian city lies closest to the Equator?",
    "options": [
      "Calabar",
      "Bukuru",
      "Mandara Mountains",
      "Precambrian"
    ],
    "answer": "Calabar"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the primary geological feature of the Mambilla Plateau?",
    "options": [
      "Ogun River",
      "Highland escarpment",
      "Benin Basin",
      "An aulacogen"
    ],
    "answer": "Highland escarpment"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which desert-like region is found in northeastern Nigeria?",
    "options": [
      "Sahel",
      "Confluence of Rivers Niger and Benue",
      "Taraba",
      "Benin Basin"
    ],
    "answer": "Sahel"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the deepest natural lake in Nigeria?",
    "options": [
      "Yelwa",
      "Opi Lake",
      "River Kaduna",
      "Sahel"
    ],
    "answer": "Opi Lake"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian mountain range lies along the Cameroon border?",
    "options": [
      "1,200–1,400 metres",
      "River Niger",
      "Precambrian",
      "Mandara Mountains"
    ],
    "answer": "Mandara Mountains"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the name of the highest point in Nigeria?",
    "options": [
      "Kano",
      "Chappal Waddi",
      "Gashaka Gumti National Park",
      "Mandara Mountains"
    ],
    "answer": "Chappal Waddi"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river forms part of the boundary between Nigeria and Benin Republic?",
    "options": [
      "Kano",
      "River Yewa",
      "Mandara Mountains",
      "Granite"
    ],
    "answer": "River Yewa"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which town in Nigeria is known as the hottest due to high year-round temperatures?",
    "options": [
      "Maiduguri",
      "Gembu",
      "Granite",
      "River Niger"
    ],
    "answer": "Maiduguri"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the estimated elevation of the Jos Plateau?",
    "options": [
      "Precambrian",
      "Tropical savanna",
      "1,200–1,400 metres",
      "Cross River"
    ],
    "answer": "1,200–1,400 metres"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian forest reserve is a UNESCO World Heritage Site?",
    "options": [
      "Wukari",
      "Bonny Island",
      "Borno",
      "Osun-Osogbo Sacred Grove"
    ],
    "answer": "Osun-Osogbo Sacred Grove"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state in Nigeria is entirely surrounded by another?",
    "options": [
      "Kogi",
      "Borno",
      "River Kaduna",
      "Enugu surrounds Ebonyi partially, but none are completely enclosed"
    ],
    "answer": "Enugu surrounds Ebonyi partially, but none are completely enclosed"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the location of Nigeria’s coldest recorded temperature?",
    "options": [
      "Akwa Ibom",
      "Mandara Mountains",
      "Gembu",
      "Approximately 6.5°N"
    ],
    "answer": "Gembu"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river is responsible for the formation of the Niger Delta?",
    "options": [
      "An aulacogen",
      "River Niger",
      "Gashaka Gumti National Park",
      "Ogun River"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian national park is famous for Yankari Hot Springs?",
    "options": [
      "Yankari National Park",
      "Highland escarpment",
      "Northeast",
      "Calabar"
    ],
    "answer": "Yankari National Park"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which town marks the westernmost point of Nigeria?",
    "options": [
      "Opi Lake",
      "Kogi",
      "1,200–1,400 metres",
      "Yelwa"
    ],
    "answer": "Yelwa"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the geographical significance of Lokoja?",
    "options": [
      "Bukuru",
      "Confluence of Rivers Niger and Benue",
      "Gashaka Gumti National Park",
      "Wukari"
    ],
    "answer": "Confluence of Rivers Niger and Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state borders both Cameroon and Benue?",
    "options": [
      "Taraba",
      "Lokoja",
      "Approximately 6.5°N",
      "Chappal Waddi"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the main water body supplying Abuja with drinking water?",
    "options": [
      "Lower Usuma Dam",
      "Precambrian",
      "Sahel",
      "Lokoja"
    ],
    "answer": "Lower Usuma Dam"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the climate classification of most of northern Nigeria?",
    "options": [
      "Osun-Osogbo Sacred Grove",
      "Tropical savanna",
      "Granite",
      "Taraba"
    ],
    "answer": "Tropical savanna"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian city is closest to the Niger-Benue confluence?",
    "options": [
      "Confluence of Rivers Niger and Benue",
      "Kano",
      "Lokoja",
      "Around 13°N"
    ],
    "answer": "Lokoja"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the geological age of the Nigerian Basement Complex?",
    "options": [
      "Kogi",
      "Cross River",
      "Precambrian",
      "Chappal Waddi"
    ],
    "answer": "Precambrian"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which basin is crucial for oil production in the Niger Delta?",
    "options": [
      "Enugu surrounds Ebonyi partially, but none are completely enclosed",
      "River Cross",
      "Benin Basin",
      "Highland escarpment"
    ],
    "answer": "Benin Basin"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state has the longest coastline?",
    "options": [
      "Akwa Ibom",
      "River Ogun",
      "An aulacogen",
      "Mandara Mountains"
    ],
    "answer": "Akwa Ibom"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the largest man-made lake in Nigeria?",
    "options": [
      "Highland escarpment",
      "Kainji Lake",
      "Bonny Island",
      "Sahel"
    ],
    "answer": "Kainji Lake"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river runs through Ibadan?",
    "options": [
      "Mandara Mountains",
      "Tropical savanna",
      "Ogun River",
      "Cross River"
    ],
    "answer": "Ogun River"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state is located at the highest elevation in Nigeria?",
    "options": [
      "Taraba",
      "Lake Chad",
      "An aulacogen",
      "Lokoja"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What type of rock dominates the Jos Plateau?",
    "options": [
      "Granite",
      "Jos Plateau",
      "River Cross",
      "Sahel"
    ],
    "answer": "Granite"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which region in Nigeria is prone to desertification?",
    "options": [
      "Maiduguri",
      "Mandara Mountains",
      "Northeast",
      "Precambrian"
    ],
    "answer": "Northeast"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the main river in the eastern Niger Delta?",
    "options": [
      "River Cross",
      "Tropical savanna",
      "Yelwa",
      "River Niger"
    ],
    "answer": "River Cross"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which geological structure lies under the Benue Trough?",
    "options": [
      "An aulacogen",
      "Cross River",
      "Granite",
      "Lake Chad"
    ],
    "answer": "An aulacogen"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river flows through Onitsha?",
    "options": [
      "Taraba",
      "1,200–1,400 metres",
      "Enugu surrounds Ebonyi partially, but none are completely enclosed",
      "River Niger"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian town is closest to the geographical centre of Nigeria?",
    "options": [
      "Precambrian",
      "Kogi",
      "Wukari",
      "River Niger"
    ],
    "answer": "Wukari"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state borders the most countries?",
    "options": [
      "Lower Usuma Dam",
      "Borno",
      "Benin Basin",
      "River Kaduna"
    ],
    "answer": "Borno"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which city is located on the southern edge of the Jos Plateau?",
    "options": [
      "Highland escarpment",
      "Lower Usuma Dam",
      "Bukuru",
      "Mandara Mountains"
    ],
    "answer": "Bukuru"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the latitude of Lagos?",
    "options": [
      "Mandara Mountains",
      "Approximately 6.5°N",
      "Calabar",
      "Bonny Island"
    ],
    "answer": "Approximately 6.5°N"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian island is closest to São Tomé and Príncipe?",
    "options": [
      "Tropical savanna",
      "Precambrian",
      "Bonny Island",
      "River Niger"
    ],
    "answer": "Bonny Island"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which water body separates Nigeria from Cameroon?",
    "options": [
      "Cross River",
      "Kogi",
      "River Yewa",
      "Granite"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which national park is located in Taraba State?",
    "options": [
      "Gashaka Gumti National Park",
      "River Niger",
      "Lokoja",
      "Osun-Osogbo Sacred Grove"
    ],
    "answer": "Gashaka Gumti National Park"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river forms part of the boundary between Nigeria and Niger?",
    "options": [
      "Lokoja",
      "Wukari",
      "River Niger",
      "Approximately 6.5°N"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the longest river entirely within Nigeria?",
    "options": [
      "River Cross",
      "Approximately 6.5°N",
      "River Kaduna",
      "Maiduguri"
    ],
    "answer": "River Kaduna"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state has the highest number of local government areas?",
    "options": [
      "River Cross",
      "Kano",
      "Maiduguri",
      "River Niger"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state shares boundaries with the most other Nigerian states?",
    "options": [
      "Borno",
      "River Niger",
      "Highland escarpment",
      "Kogi"
    ],
    "answer": "Kogi"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the latitude of Nigeria's northernmost point?",
    "options": [
      "Precambrian",
      "Around 13°N",
      "River Yewa",
      "Granite"
    ],
    "answer": "Around 13°N"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian lake has drastically shrunk due to climate change?",
    "options": [
      "Confluence of Rivers Niger and Benue",
      "Opi Lake",
      "Highland escarpment",
      "Lake Chad"
    ],
    "answer": "Lake Chad"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the name of the volcanic plateau in central Nigeria?",
    "options": [
      "Borno",
      "Imo River estuary",
      "River Niger",
      "Jos Plateau"
    ],
    "answer": "Jos Plateau"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian river is a tributary of the River Niger and flows through the southwest?",
    "options": [
      "River Ogun",
      "Approximately 6.5°N",
      "River Niger",
      "Lower Usuma Dam"
    ],
    "answer": "River Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state in Nigeria is nicknamed the 'Confluence State'?",
    "options": [
      "Confluence of Rivers Niger and Benue",
      "Ogun River",
      "Kogi",
      "River Yewa"
    ],
    "answer": "Kogi"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the name of the southernmost point of Nigeria?",
    "options": [
      "Cross River",
      "River Ogun",
      "Imo River estuary",
      "River Niger"
    ],
    "answer": "Imo River estuary"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state contains the Obudu Mountain Resort?",
    "options": [
      "Cross River",
      "Opi Lake",
      "Maiduguri",
      "River Niger"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian city lies closest to the Equator?",
    "options": [
      "Gashaka Gumti National Park",
      "Calabar",
      "River Yewa",
      "Precambrian"
    ],
    "answer": "Calabar"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the primary geological feature of the Mambilla Plateau?",
    "options": [
      "Imo River estuary",
      "Highland escarpment",
      "River Niger",
      "Ogun River"
    ],
    "answer": "Highland escarpment"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which desert-like region is found in northeastern Nigeria?",
    "options": [
      "Sahel",
      "Around 13°N",
      "Highland escarpment",
      "Benin Basin"
    ],
    "answer": "Sahel"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the deepest natural lake in Nigeria?",
    "options": [
      "Bonny Island",
      "River Niger",
      "Chappal Waddi",
      "Opi Lake"
    ],
    "answer": "Opi Lake"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian mountain range lies along the Cameroon border?",
    "options": [
      "Benin Basin",
      "Lake Chad",
      "Yelwa",
      "Mandara Mountains"
    ],
    "answer": "Mandara Mountains"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the name of the highest point in Nigeria?",
    "options": [
      "Chappal Waddi",
      "Lokoja",
      "Confluence of Rivers Niger and Benue",
      "Around 13°N"
    ],
    "answer": "Chappal Waddi"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river forms part of the boundary between Nigeria and Benin Republic?",
    "options": [
      "An aulacogen",
      "River Yewa",
      "Yelwa",
      "Lake Chad"
    ],
    "answer": "River Yewa"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which town in Nigeria is known as the hottest due to high year-round temperatures?",
    "options": [
      "Benin Basin",
      "Maiduguri",
      "Imo River estuary",
      "Kogi"
    ],
    "answer": "Maiduguri"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the estimated elevation of the Jos Plateau?",
    "options": [
      "1,200–1,400 metres",
      "Akwa Ibom",
      "Yankari National Park",
      "Taraba"
    ],
    "answer": "1,200–1,400 metres"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian forest reserve is a UNESCO World Heritage Site?",
    "options": [
      "Calabar",
      "Yankari National Park",
      "River Ogun",
      "Osun-Osogbo Sacred Grove"
    ],
    "answer": "Osun-Osogbo Sacred Grove"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state in Nigeria is entirely surrounded by another?",
    "options": [
      "Kogi",
      "Enugu surrounds Ebonyi partially, but none are completely enclosed",
      "Akwa Ibom",
      "River Niger"
    ],
    "answer": "Enugu surrounds Ebonyi partially, but none are completely enclosed"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the location of Nigeria’s coldest recorded temperature?",
    "options": [
      "River Ogun",
      "1,200–1,400 metres",
      "Gembu",
      "Akwa Ibom"
    ],
    "answer": "Gembu"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river is responsible for the formation of the Niger Delta?",
    "options": [
      "Precambrian",
      "River Niger",
      "Cross River",
      "Maiduguri"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian national park is famous for Yankari Hot Springs?",
    "options": [
      "Yankari National Park",
      "River Ogun",
      "Sahel",
      "Imo River estuary"
    ],
    "answer": "Yankari National Park"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which town marks the westernmost point of Nigeria?",
    "options": [
      "River Ogun",
      "River Cross",
      "Yelwa",
      "Enugu surrounds Ebonyi partially, but none are completely enclosed"
    ],
    "answer": "Yelwa"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the geographical significance of Lokoja?",
    "options": [
      "Benin Basin",
      "Calabar",
      "Confluence of Rivers Niger and Benue",
      "Imo River estuary"
    ],
    "answer": "Confluence of Rivers Niger and Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state borders both Cameroon and Benue?",
    "options": [
      "Around 13°N",
      "Kogi",
      "Ogun River",
      "Taraba"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the main water body supplying Abuja with drinking water?",
    "options": [
      "Benin Basin",
      "Jos Plateau",
      "River Kaduna",
      "Lower Usuma Dam"
    ],
    "answer": "Lower Usuma Dam"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the climate classification of most of northern Nigeria?",
    "options": [
      "Lower Usuma Dam",
      "Tropical savanna",
      "Kogi",
      "Highland escarpment"
    ],
    "answer": "Tropical savanna"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian city is closest to the Niger-Benue confluence?",
    "options": [
      "1,200–1,400 metres",
      "Lake Chad",
      "Osun-Osogbo Sacred Grove",
      "Lokoja"
    ],
    "answer": "Lokoja"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the geological age of the Nigerian Basement Complex?",
    "options": [
      "Ogun River",
      "Precambrian",
      "Kano",
      "Lake Chad"
    ],
    "answer": "Precambrian"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which basin is crucial for oil production in the Niger Delta?",
    "options": [
      "Opi Lake",
      "Approximately 6.5°N",
      "Benin Basin",
      "Borno"
    ],
    "answer": "Benin Basin"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state has the longest coastline?",
    "options": [
      "Yankari National Park",
      "Chappal Waddi",
      "1,200–1,400 metres",
      "Akwa Ibom"
    ],
    "answer": "Akwa Ibom"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the largest man-made lake in Nigeria?",
    "options": [
      "Kainji Lake",
      "Yelwa",
      "Cross River",
      "Confluence of Rivers Niger and Benue"
    ],
    "answer": "Kainji Lake"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river runs through Ibadan?",
    "options": [
      "Enugu surrounds Ebonyi partially, but none are completely enclosed",
      "Yankari National Park",
      "Ogun River",
      "Benin Basin"
    ],
    "answer": "Ogun River"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which state is located at the highest elevation in Nigeria?",
    "options": [
      "Borno",
      "Osun-Osogbo Sacred Grove",
      "Taraba",
      "Kano"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What type of rock dominates the Jos Plateau?",
    "options": [
      "Granite",
      "Lake Chad",
      "Taraba",
      "Kainji Lake"
    ],
    "answer": "Granite"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which region in Nigeria is prone to desertification?",
    "options": [
      "Enugu surrounds Ebonyi partially, but none are completely enclosed",
      "River Niger",
      "Kogi",
      "Northeast"
    ],
    "answer": "Northeast"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the main river in the eastern Niger Delta?",
    "options": [
      "River Cross",
      "Taraba",
      "Lake Chad",
      "Akwa Ibom"
    ],
    "answer": "River Cross"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which geological structure lies under the Benue Trough?",
    "options": [
      "River Niger",
      "Chappal Waddi",
      "Kogi",
      "An aulacogen"
    ],
    "answer": "An aulacogen"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river flows through Onitsha?",
    "options": [
      "Ogun River",
      "River Niger",
      "Chappal Waddi",
      "Taraba"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian town is closest to the geographical centre of Nigeria?",
    "options": [
      "Taraba",
      "Calabar",
      "Highland escarpment",
      "Wukari"
    ],
    "answer": "Wukari"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian state borders the most countries?",
    "options": [
      "Gembu",
      "Borno",
      "Enugu surrounds Ebonyi partially, but none are completely enclosed",
      "River Ogun"
    ],
    "answer": "Borno"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which city is located on the southern edge of the Jos Plateau?",
    "options": [
      "Kainji Lake",
      "Highland escarpment",
      "Precambrian",
      "Bukuru"
    ],
    "answer": "Bukuru"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "What is the latitude of Lagos?",
    "options": [
      "Approximately 6.5°N",
      "Kogi",
      "Benin Basin",
      "Lokoja"
    ],
    "answer": "Approximately 6.5°N"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which Nigerian island is closest to São Tomé and Príncipe?",
    "options": [
      "Calabar",
      "Bonny Island",
      "Jos Plateau",
      "Precambrian"
    ],
    "answer": "Bonny Island"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which water body separates Nigeria from Cameroon?",
    "options": [
      "Cross River",
      "River Kaduna",
      "Yankari National Park",
      "Lake Chad"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which national park is located in Taraba State?",
    "options": [
      "Precambrian",
      "River Cross",
      "Gashaka Gumti National Park",
      "River Ogun"
    ],
    "answer": "Gashaka Gumti National Park"
  },
  {
    "category": "Geography",
    "difficulty": "Hard",
    "question": "Which river forms part of the boundary between Nigeria and Niger?",
    "options": [
      "Northeast",
      "Cross River",
      "An aulacogen",
      "River Niger"
    ],
    "answer": "River Niger"
  },

  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Plateau State?",
    "options": [
      "Atlantic Ocean",
      "River Kaduna",
      "Kano",
      "Jos"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which river is the main tributary of the River Niger in Nigeria?",
    "options": [
      "River Benue",
      "Asaba",
      "Nok",
      "Bayelsa"
    ],
    "answer": "River Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is known as the 'Centre of Learning'?",
    "options": [
      "Adamawa",
      "River Kaduna",
      "Enugu",
      "Kano"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Akwa Ibom State?",
    "options": [
      "Taraba",
      "Niger",
      "Uyo",
      "Asaba"
    ],
    "answer": "Uyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian city is closest to the River Niger and River Benue confluence?",
    "options": [
      "Lokoja",
      "Kainji Dam",
      "Sokoto",
      "Ado-Ekiti"
    ],
    "answer": "Lokoja"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state has Calabar as its capital?",
    "options": [
      "Ogun",
      "Cross River",
      "Niger State",
      "Birnin Kebbi"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the slogan 'Home of Peace and Tourism'?",
    "options": [
      "River Benue",
      "Adamawa",
      "Kano",
      "Okomu Forest Reserve"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has Makurdi as its capital?",
    "options": [
      "Taraba",
      "Ogun",
      "Benue",
      "Uyo"
    ],
    "answer": "Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state in Nigeria is known for the Zuma Rock?",
    "options": [
      "Cross River",
      "Adamawa",
      "Niger State",
      "Awka"
    ],
    "answer": "Niger State"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which two states share the Erin-Ijesha Waterfall?",
    "options": [
      "Osogbo",
      "Osun and Ekiti",
      "Okomu Forest Reserve",
      "Kano"
    ],
    "answer": "Osun and Ekiti"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state in Nigeria is referred to as the 'Coal City State'?",
    "options": [
      "Enugu",
      "River Benue",
      "Adamawa",
      "Kano"
    ],
    "answer": "Enugu"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital city of Delta State?",
    "options": [
      "Asaba",
      "Niger State",
      "Oyo",
      "Ibadan"
    ],
    "answer": "Asaba"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the highest elevation?",
    "options": [
      "Kano",
      "Taraba",
      "Ibadan",
      "Bayelsa"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which is the largest city in northern Nigeria?",
    "options": [
      "Kano",
      "River Benue",
      "Oyo",
      "Bayelsa"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the name of the forest reserve in Edo State?",
    "options": [
      "Cross River",
      "Niger State",
      "Okomu Forest Reserve",
      "River Kaduna"
    ],
    "answer": "Okomu Forest Reserve"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has 'The Big Heart' as its slogan?",
    "options": [
      "Adamawa",
      "Osogbo",
      "Atlantic Ocean",
      "Delta"
    ],
    "answer": "Delta"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is bordered by both Ogun and Lagos?",
    "options": [
      "Asaba",
      "Oyo",
      "Federal Capital Territory (Abuja)",
      "Nasarawa"
    ],
    "answer": "Oyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is home to the Olumo Rock?",
    "options": [
      "Birnin Kebbi",
      "Ogun",
      "River Benue",
      "Gusau"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the name of the river that flows through Niger State?",
    "options": [
      "Oyo",
      "River Kaduna",
      "Nasarawa",
      "Jos"
    ],
    "answer": "River Kaduna"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has a boundary with Cameroon?",
    "options": [
      "Delta",
      "Cross River",
      "Ibadan",
      "Kano"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Ekiti State?",
    "options": [
      "Ado-Ekiti",
      "Ogun",
      "Oyo",
      "Uyo"
    ],
    "answer": "Ado-Ekiti"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is popularly known for its groundnut pyramids?",
    "options": [
      "Oyo",
      "Delta",
      "Kano",
      "Sokoto"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which city is famous for the Durbar festival?",
    "options": [
      "Jos",
      "Kano",
      "Bayelsa",
      "Osogbo"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is nicknamed the 'Pace Setter'?",
    "options": [
      "Oyo",
      "Awka",
      "Kano",
      "Gusau"
    ],
    "answer": "Oyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Borno State?",
    "options": [
      "Kano",
      "Maiduguri",
      "Adamawa",
      "Delta"
    ],
    "answer": "Maiduguri"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is home to the Gurara Waterfalls?",
    "options": [
      "Niger",
      "Lokoja",
      "Awka",
      "Delta"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which city lies on the coast and is Nigeria’s commercial capital?",
    "options": [
      "Asaba",
      "Ogun",
      "Lagos",
      "Oyo"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the slogan 'Land of Promise'?",
    "options": [
      "Lokoja",
      "Adamawa",
      "Okomu Forest Reserve",
      "Akwa Ibom"
    ],
    "answer": "Akwa Ibom"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state shares a border with the Atlantic Ocean?",
    "options": [
      "Uyo",
      "Maiduguri",
      "Sokoto",
      "Bayelsa"
    ],
    "answer": "Bayelsa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Zamfara State?",
    "options": [
      "Atlantic Ocean",
      "Awka",
      "Gusau",
      "Lagos"
    ],
    "answer": "Gusau"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which town is famous for the Nok culture?",
    "options": [
      "Bayelsa",
      "Jos",
      "Abia",
      "Nok"
    ],
    "answer": "Nok"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the name of the dam in Kainji used for hydroelectric power?",
    "options": [
      "Enugu",
      "Ibadan",
      "Maiduguri",
      "Kainji Dam"
    ],
    "answer": "Kainji Dam"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Kebbi State?",
    "options": [
      "Asaba",
      "Awka",
      "Birnin Kebbi",
      "Adamawa"
    ],
    "answer": "Birnin Kebbi"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which city is known as the ancient city of Nigeria?",
    "options": [
      "Ibadan",
      "River Kaduna",
      "Nun River",
      "Taraba"
    ],
    "answer": "Ibadan"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What state has Yola as its capital?",
    "options": [
      "Jos",
      "Adamawa",
      "Ogun",
      "Atlantic Ocean"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is known for having the Mambilla Plateau?",
    "options": [
      "Gusau",
      "Oyo",
      "Asaba",
      "Taraba"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Anambra State?",
    "options": [
      "Kano",
      "Lokoja",
      "Awka",
      "Ogun"
    ],
    "answer": "Awka"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which river flows through Bayelsa State?",
    "options": [
      "Kano",
      "Federal Capital Territory (Abuja)",
      "Oyo",
      "Nun River"
    ],
    "answer": "Nun River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has Lafia as its capital?",
    "options": [
      "Cross River",
      "Ogun",
      "Nasarawa",
      "Taraba"
    ],
    "answer": "Nasarawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which capital city is located on the Jos Plateau?",
    "options": [
      "Jos",
      "Ibadan",
      "Enugu",
      "Ogun"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Osun State?",
    "options": [
      "Osogbo",
      "Uyo",
      "Nun River",
      "Ado-Ekiti"
    ],
    "answer": "Osogbo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the geographical feature that borders Nigeria to the south?",
    "options": [
      "Abia",
      "Osogbo",
      "Atlantic Ocean",
      "Awka"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is referred to as the 'Gateway State'?",
    "options": [
      "Ogun",
      "Oyo",
      "Taraba",
      "Delta"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is known for the Aso Rock formation?",
    "options": [
      "River Kaduna",
      "Niger State",
      "Maiduguri",
      "Federal Capital Territory (Abuja)"
    ],
    "answer": "Federal Capital Territory (Abuja)"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has a capital called Umuahia?",
    "options": [
      "Abia",
      "Lokoja",
      "Taraba",
      "Okomu Forest Reserve"
    ],
    "answer": "Abia"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is located farthest north?",
    "options": [
      "Osogbo",
      "Oyo",
      "Sokoto",
      "Adamawa"
    ],
    "answer": "Sokoto"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Plateau State?",
    "options": [
      "Jos",
      "Bayelsa",
      "Atlantic Ocean",
      "Ado-Ekiti"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which river is the main tributary of the River Niger in Nigeria?",
    "options": [
      "Cross River",
      "Awka",
      "River Benue",
      "Niger State"
    ],
    "answer": "River Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is known as the 'Centre of Learning'?",
    "options": [
      "Cross River",
      "Enugu",
      "Kano",
      "Uyo"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Akwa Ibom State?",
    "options": [
      "Uyo",
      "Enugu",
      "Birnin Kebbi",
      "Adamawa"
    ],
    "answer": "Uyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian city is closest to the River Niger and River Benue confluence?",
    "options": [
      "Oyo",
      "Adamawa",
      "Lokoja",
      "Asaba"
    ],
    "answer": "Lokoja"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state has Calabar as its capital?",
    "options": [
      "Kano",
      "Federal Capital Territory (Abuja)",
      "Cross River",
      "Nun River"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the slogan 'Home of Peace and Tourism'?",
    "options": [
      "Sokoto",
      "Lagos",
      "Adamawa",
      "Awka"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has Makurdi as its capital?",
    "options": [
      "Benue",
      "Osun and Ekiti",
      "Jos",
      "Lagos"
    ],
    "answer": "Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state in Nigeria is known for the Zuma Rock?",
    "options": [
      "Niger State",
      "Lokoja",
      "Lagos",
      "Adamawa"
    ],
    "answer": "Niger State"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which two states share the Erin-Ijesha Waterfall?",
    "options": [
      "Enugu",
      "Birnin Kebbi",
      "Osun and Ekiti",
      "Jos"
    ],
    "answer": "Osun and Ekiti"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state in Nigeria is referred to as the 'Coal City State'?",
    "options": [
      "River Kaduna",
      "Asaba",
      "Enugu",
      "Federal Capital Territory (Abuja)"
    ],
    "answer": "Enugu"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital city of Delta State?",
    "options": [
      "Ogun",
      "River Kaduna",
      "Asaba",
      "Adamawa"
    ],
    "answer": "Asaba"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the highest elevation?",
    "options": [
      "Lokoja",
      "Taraba",
      "Ibadan",
      "Cross River"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which is the largest city in northern Nigeria?",
    "options": [
      "Kano",
      "Adamawa",
      "Sokoto",
      "Federal Capital Territory (Abuja)"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the name of the forest reserve in Edo State?",
    "options": [
      "Okomu Forest Reserve",
      "Benue",
      "Kano",
      "Bayelsa"
    ],
    "answer": "Okomu Forest Reserve"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has 'The Big Heart' as its slogan?",
    "options": [
      "Delta",
      "Taraba",
      "Lokoja",
      "Nok"
    ],
    "answer": "Delta"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is bordered by both Ogun and Lagos?",
    "options": [
      "Oyo",
      "Cross River",
      "Akwa Ibom",
      "Gusau"
    ],
    "answer": "Oyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is home to the Olumo Rock?",
    "options": [
      "Ogun",
      "Okomu Forest Reserve",
      "Adamawa",
      "Kano"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the name of the river that flows through Niger State?",
    "options": [
      "Benue",
      "Jos",
      "River Kaduna",
      "Delta"
    ],
    "answer": "River Kaduna"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has a boundary with Cameroon?",
    "options": [
      "Adamawa",
      "Federal Capital Territory (Abuja)",
      "Cross River",
      "River Benue"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Ekiti State?",
    "options": [
      "Jos",
      "Ado-Ekiti",
      "Cross River",
      "Kano"
    ],
    "answer": "Ado-Ekiti"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is popularly known for its groundnut pyramids?",
    "options": [
      "Kano",
      "Ogun",
      "Uyo",
      "Bayelsa"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which city is famous for the Durbar festival?",
    "options": [
      "Kano",
      "Awka",
      "Ado-Ekiti",
      "Cross River"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is nicknamed the 'Pace Setter'?",
    "options": [
      "River Kaduna",
      "Niger",
      "Oyo",
      "Jos"
    ],
    "answer": "Oyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Borno State?",
    "options": [
      "Jos",
      "Nun River",
      "Taraba",
      "Maiduguri"
    ],
    "answer": "Maiduguri"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is home to the Gurara Waterfalls?",
    "options": [
      "River Benue",
      "Kano",
      "Niger",
      "Nok"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which city lies on the coast and is Nigeria’s commercial capital?",
    "options": [
      "Nun River",
      "Nok",
      "Delta",
      "Lagos"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the slogan 'Land of Promise'?",
    "options": [
      "Akwa Ibom",
      "Sokoto",
      "River Benue",
      "Atlantic Ocean"
    ],
    "answer": "Akwa Ibom"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state shares a border with the Atlantic Ocean?",
    "options": [
      "Bayelsa",
      "Jos",
      "Lagos",
      "Taraba"
    ],
    "answer": "Bayelsa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Zamfara State?",
    "options": [
      "Oyo",
      "River Kaduna",
      "Gusau",
      "Taraba"
    ],
    "answer": "Gusau"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which town is famous for the Nok culture?",
    "options": [
      "Kano",
      "Niger State",
      "Niger",
      "Nok"
    ],
    "answer": "Nok"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the name of the dam in Kainji used for hydroelectric power?",
    "options": [
      "Kano",
      "Federal Capital Territory (Abuja)",
      "Kainji Dam",
      "Enugu"
    ],
    "answer": "Kainji Dam"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Kebbi State?",
    "options": [
      "Oyo",
      "Kano",
      "Birnin Kebbi",
      "Jos"
    ],
    "answer": "Birnin Kebbi"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which city is known as the ancient city of Nigeria?",
    "options": [
      "Uyo",
      "Ibadan",
      "Kano",
      "Ogun"
    ],
    "answer": "Ibadan"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What state has Yola as its capital?",
    "options": [
      "Cross River",
      "Bayelsa",
      "Ogun",
      "Adamawa"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is known for having the Mambilla Plateau?",
    "options": [
      "Taraba",
      "Asaba",
      "Okomu Forest Reserve",
      "Lagos"
    ],
    "answer": "Taraba"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Anambra State?",
    "options": [
      "Kano",
      "Ogun",
      "Awka",
      "Atlantic Ocean"
    ],
    "answer": "Awka"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which river flows through Bayelsa State?",
    "options": [
      "Lokoja",
      "Nun River",
      "Jos",
      "Osun and Ekiti"
    ],
    "answer": "Nun River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has Lafia as its capital?",
    "options": [
      "Gusau",
      "Nasarawa",
      "Lokoja",
      "Uyo"
    ],
    "answer": "Nasarawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which capital city is located on the Jos Plateau?",
    "options": [
      "Atlantic Ocean",
      "Birnin Kebbi",
      "Uyo",
      "Jos"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Osun State?",
    "options": [
      "Ogun",
      "Osun and Ekiti",
      "Bayelsa",
      "Osogbo"
    ],
    "answer": "Osogbo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the geographical feature that borders Nigeria to the south?",
    "options": [
      "River Benue",
      "Kainji Dam",
      "Ogun",
      "Atlantic Ocean"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is referred to as the 'Gateway State'?",
    "options": [
      "Bayelsa",
      "Ogun",
      "Oyo",
      "Asaba"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state is known for the Aso Rock formation?",
    "options": [
      "Federal Capital Territory (Abuja)",
      "Oyo",
      "Kano",
      "Delta"
    ],
    "answer": "Federal Capital Territory (Abuja)"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has a capital called Umuahia?",
    "options": [
      "Niger",
      "Ado-Ekiti",
      "Abia",
      "Oyo"
    ],
    "answer": "Abia"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is located farthest north?",
    "options": [
      "Adamawa",
      "Oyo",
      "Sokoto",
      "Lagos"
    ],
    "answer": "Sokoto"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Plateau State?",
    "options": [
      "Lokoja",
      "Kano",
      "Atlantic Ocean",
      "Jos"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which river is the main tributary of the River Niger in Nigeria?",
    "options": [
      "Delta",
      "Oyo",
      "Benue",
      "River Benue"
    ],
    "answer": "River Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state is known as the 'Centre of Learning'?",
    "options": [
      "Kano",
      "Maiduguri",
      "Osogbo",
      "Adamawa"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "What is the capital of Akwa Ibom State?",
    "options": [
      "Uyo",
      "Birnin Kebbi",
      "Asaba",
      "Lagos"
    ],
    "answer": "Uyo"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian city is closest to the River Niger and River Benue confluence?",
    "options": [
      "Lokoja",
      "Birnin Kebbi",
      "Okomu Forest Reserve",
      "Asaba"
    ],
    "answer": "Lokoja"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which state has Calabar as its capital?",
    "options": [
      "Cross River",
      "Oyo",
      "Asaba",
      "Jos"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has the slogan 'Home of Peace and Tourism'?",
    "options": [
      "Oyo",
      "Akwa Ibom",
      "Gusau",
      "Adamawa"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Medium",
    "question": "Which Nigerian state has Makurdi as its capital?",
    "options": [
      "Taraba",
      "Sokoto",
      "Cross River",
      "Benue"
    ],
    "answer": "Benue"
  },


  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Nigeria?",
    "options": [
      "Abuja",
      "Lagos",
      "Port Harcourt",
      "Niger"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is the most populous in Nigeria?",
    "options": [
      "Jos",
      "Ibadan",
      "Lagos",
      "Ogun"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which ocean is located to the south of Nigeria?",
    "options": [
      "Jalingo",
      "Atlantic Ocean",
      "Ikeja",
      "Nsukka"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the name of the river that forms a delta in southern Nigeria?",
    "options": [
      "Bauchi",
      "Nsukka",
      "Kaduna",
      "River Niger"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is known as Nigeria’s commercial capital?",
    "options": [
      "Sokoto",
      "Gembu",
      "Ondo",
      "Lagos"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Lagos State?",
    "options": [
      "Lagos",
      "Ondo",
      "Ikeja",
      "Maiduguri"
    ],
    "answer": "Ikeja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which river is the longest in Nigeria?",
    "options": [
      "Adamawa",
      "River Niger",
      "Anambra",
      "Lagos"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Enugu as its capital?",
    "options": [
      "Enugu",
      "Akwa Ibom",
      "Abeokuta",
      "Niger"
    ],
    "answer": "Enugu"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Rivers State?",
    "options": [
      "Cross River",
      "Port Harcourt",
      "Bayelsa",
      "Anambra"
    ],
    "answer": "Port Harcourt"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state is known for oil production in Nigeria?",
    "options": [
      "Bayelsa",
      "Abakaliki",
      "Akwa Ibom",
      "Abuja"
    ],
    "answer": "Bayelsa"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the northernmost state in Nigeria?",
    "options": [
      "Bauchi",
      "Abakaliki",
      "River Niger",
      "Sokoto"
    ],
    "answer": "Sokoto"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the westernmost state in Nigeria?",
    "options": [
      "Abuja",
      "Ondo",
      "Ekiti",
      "Ogun"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Oyo State?",
    "options": [
      "Ibadan",
      "Abuja",
      "River Niger",
      "Gembu"
    ],
    "answer": "Ibadan"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is home to the University of Nigeria?",
    "options": [
      "Nsukka",
      "Cross River",
      "Lagos",
      "River Benue"
    ],
    "answer": "Nsukka"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the largest state by land area in Nigeria?",
    "options": [
      "Lagos",
      "Abuja",
      "Abakaliki",
      "Niger"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which river meets the River Niger at Lokoja?",
    "options": [
      "Port Harcourt",
      "River Benue",
      "River Niger",
      "Adamawa"
    ],
    "answer": "River Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Kwara State?",
    "options": [
      "Niger",
      "Abeokuta",
      "Cross River",
      "Ilorin"
    ],
    "answer": "Ilorin"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is known as the 'Sunshine State'?",
    "options": [
      "Niger",
      "River Niger",
      "Ondo",
      "Cross River"
    ],
    "answer": "Ondo"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is called the 'Land of Honour'?",
    "options": [
      "Cross River",
      "Dutse",
      "Jos",
      "Ekiti"
    ],
    "answer": "Ekiti"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is known for the Olumo Rock?",
    "options": [
      "Sokoto",
      "Enugu",
      "Abeokuta",
      "Maiduguri"
    ],
    "answer": "Abeokuta"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Uyo as its capital?",
    "options": [
      "Kaduna",
      "Rivers",
      "River Benue",
      "Akwa Ibom"
    ],
    "answer": "Akwa Ibom"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Edo State?",
    "options": [
      "Kaduna",
      "Niger",
      "Benin City",
      "Rivers"
    ],
    "answer": "Benin City"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city hosts the National Stadium in Nigeria?",
    "options": [
      "Jos",
      "Lagos",
      "Jalingo",
      "Abuja"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What state is Port Harcourt located in?",
    "options": [
      "Sokoto",
      "Imo",
      "Rivers",
      "Gembu"
    ],
    "answer": "Rivers"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is nicknamed the 'Heartland State'?",
    "options": [
      "Adamawa",
      "Enugu",
      "Lagos",
      "Imo"
    ],
    "answer": "Imo"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state has Awka as its capital?",
    "options": [
      "Lagos",
      "Niger",
      "Anambra",
      "Bayelsa"
    ],
    "answer": "Anambra"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is famous for Zuma Rock?",
    "options": [
      "Rivers",
      "Niger",
      "Sokoto",
      "Zamfara"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Kaduna State?",
    "options": [
      "Kaduna",
      "Jos",
      "River Niger",
      "Gembu"
    ],
    "answer": "Kaduna"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian city is known as the 'Tin City'?",
    "options": [
      "River Benue",
      "Akwa Ibom",
      "Jos",
      "Abakaliki"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Yola as its capital?",
    "options": [
      "Kano",
      "Abuja",
      "Cross River",
      "Adamawa"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Kano State?",
    "options": [
      "Port Harcourt",
      "Kaduna",
      "Cross River",
      "Kano"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the southeasternmost state in Nigeria?",
    "options": [
      "River Benue",
      "Lagos",
      "Cross River",
      "Nasarawa"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Gombe State?",
    "options": [
      "Jalingo",
      "Gombe",
      "Anambra",
      "Kaduna"
    ],
    "answer": "Gombe"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian city is located near the Mambilla Plateau?",
    "options": [
      "Kano",
      "Nasarawa",
      "Jos",
      "Gembu"
    ],
    "answer": "Gembu"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Bauchi State?",
    "options": [
      "Niger",
      "Bauchi",
      "River Niger",
      "Kaduna"
    ],
    "answer": "Bauchi"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Minna as its capital?",
    "options": [
      "Niger",
      "Rivers",
      "Maiduguri",
      "Ikeja"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Taraba State?",
    "options": [
      "Rivers",
      "Niger",
      "Jos",
      "Jalingo"
    ],
    "answer": "Jalingo"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Gusau as its capital?",
    "options": [
      "Abeokuta",
      "Zamfara",
      "Ilorin",
      "Jos"
    ],
    "answer": "Zamfara"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Ebonyi State?",
    "options": [
      "Sokoto",
      "Gombe",
      "Abakaliki",
      "Port Harcourt"
    ],
    "answer": "Abakaliki"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Lafia as its capital?",
    "options": [
      "Ogun",
      "Dutse",
      "Ilorin",
      "Nasarawa"
    ],
    "answer": "Nasarawa"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Borno State?",
    "options": [
      "Niger",
      "Maiduguri",
      "Cross River",
      "Ekiti"
    ],
    "answer": "Maiduguri"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Jigawa State?",
    "options": [
      "Nsukka",
      "Imo",
      "Kano",
      "Dutse"
    ],
    "answer": "Dutse"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is the capital of Kebbi State?",
    "options": [
      "Port Harcourt",
      "Birnin Kebbi",
      "Benin City",
      "Ilorin"
    ],
    "answer": "Birnin Kebbi"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state is associated with the Obudu Cattle Ranch?",
    "options": [
      "Cross River",
      "Sokoto",
      "Ondo",
      "Jalingo"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the smallest state in Nigeria by land area?",
    "options": [
      "Imo",
      "Lagos",
      "River Niger",
      "Akwa Ibom"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state shares a border with the Republic of Benin?",
    "options": [
      "Niger",
      "Cross River",
      "Enugu",
      "Ogun"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state shares a border with Niger Republic?",
    "options": [
      "Kano",
      "Sokoto",
      "River Niger",
      "Bayelsa"
    ],
    "answer": "Sokoto"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Nigeria?",
    "options": [
      "Bauchi",
      "Abuja",
      "Gombe",
      "Jos"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is the most populous in Nigeria?",
    "options": [
      "Kaduna",
      "Port Harcourt",
      "Lagos",
      "Rivers"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which ocean is located to the south of Nigeria?",
    "options": [
      "Sokoto",
      "Ogun",
      "Abuja",
      "Atlantic Ocean"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the name of the river that forms a delta in southern Nigeria?",
    "options": [
      "Birnin Kebbi",
      "River Niger",
      "Gombe",
      "River Benue"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is known as Nigeria’s commercial capital?",
    "options": [
      "Jos",
      "Lagos",
      "Adamawa",
      "Ikeja"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Lagos State?",
    "options": [
      "Ikeja",
      "Rivers",
      "River Niger",
      "Nsukka"
    ],
    "answer": "Ikeja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which river is the longest in Nigeria?",
    "options": [
      "Niger",
      "River Niger",
      "Ekiti",
      "Imo"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Enugu as its capital?",
    "options": [
      "Bauchi",
      "Lagos",
      "Cross River",
      "Enugu"
    ],
    "answer": "Enugu"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Rivers State?",
    "options": [
      "Lagos",
      "Enugu",
      "Cross River",
      "Port Harcourt"
    ],
    "answer": "Port Harcourt"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state is known for oil production in Nigeria?",
    "options": [
      "Bayelsa",
      "Benin City",
      "Ekiti",
      "Sokoto"
    ],
    "answer": "Bayelsa"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the northernmost state in Nigeria?",
    "options": [
      "Sokoto",
      "Bayelsa",
      "River Niger",
      "Port Harcourt"
    ],
    "answer": "Sokoto"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the westernmost state in Nigeria?",
    "options": [
      "Sokoto",
      "River Niger",
      "Ogun",
      "Niger"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Oyo State?",
    "options": [
      "Port Harcourt",
      "Ibadan",
      "Benin City",
      "Jos"
    ],
    "answer": "Ibadan"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is home to the University of Nigeria?",
    "options": [
      "River Niger",
      "Niger",
      "River Benue",
      "Nsukka"
    ],
    "answer": "Nsukka"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the largest state by land area in Nigeria?",
    "options": [
      "Niger",
      "Abuja",
      "Adamawa",
      "River Niger"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which river meets the River Niger at Lokoja?",
    "options": [
      "River Benue",
      "Zamfara",
      "Niger",
      "Jalingo"
    ],
    "answer": "River Benue"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Kwara State?",
    "options": [
      "Niger",
      "Ilorin",
      "Maiduguri",
      "Akwa Ibom"
    ],
    "answer": "Ilorin"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is known as the 'Sunshine State'?",
    "options": [
      "Ogun",
      "Port Harcourt",
      "Ondo",
      "Birnin Kebbi"
    ],
    "answer": "Ondo"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is called the 'Land of Honour'?",
    "options": [
      "River Niger",
      "Niger",
      "Ekiti",
      "Atlantic Ocean"
    ],
    "answer": "Ekiti"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is known for the Olumo Rock?",
    "options": [
      "Lagos",
      "Abeokuta",
      "Imo",
      "Cross River"
    ],
    "answer": "Abeokuta"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Uyo as its capital?",
    "options": [
      "Akwa Ibom",
      "Nasarawa",
      "Ikeja",
      "Ogun"
    ],
    "answer": "Akwa Ibom"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Edo State?",
    "options": [
      "Ondo",
      "Gembu",
      "Gombe",
      "Benin City"
    ],
    "answer": "Benin City"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city hosts the National Stadium in Nigeria?",
    "options": [
      "Ogun",
      "Anambra",
      "Gombe",
      "Abuja"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What state is Port Harcourt located in?",
    "options": [
      "Kaduna",
      "Atlantic Ocean",
      "Rivers",
      "River Niger"
    ],
    "answer": "Rivers"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is nicknamed the 'Heartland State'?",
    "options": [
      "Abeokuta",
      "Abuja",
      "Imo",
      "Abakaliki"
    ],
    "answer": "Imo"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state has Awka as its capital?",
    "options": [
      "Atlantic Ocean",
      "Niger",
      "Anambra",
      "Ilorin"
    ],
    "answer": "Anambra"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state is famous for Zuma Rock?",
    "options": [
      "Niger",
      "Birnin Kebbi",
      "Enugu",
      "Lagos"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Kaduna State?",
    "options": [
      "Abeokuta",
      "Sokoto",
      "Kaduna",
      "Jalingo"
    ],
    "answer": "Kaduna"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian city is known as the 'Tin City'?",
    "options": [
      "Jos",
      "Abuja",
      "Cross River",
      "Ogun"
    ],
    "answer": "Jos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Yola as its capital?",
    "options": [
      "Anambra",
      "Dutse",
      "Adamawa",
      "Benin City"
    ],
    "answer": "Adamawa"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Kano State?",
    "options": [
      "Kano",
      "Ekiti",
      "Cross River",
      "Niger"
    ],
    "answer": "Kano"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the southeasternmost state in Nigeria?",
    "options": [
      "Gembu",
      "Cross River",
      "Ikeja",
      "Abeokuta"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Gombe State?",
    "options": [
      "Jos",
      "Gombe",
      "Abuja",
      "Cross River"
    ],
    "answer": "Gombe"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian city is located near the Mambilla Plateau?",
    "options": [
      "Gembu",
      "Adamawa",
      "River Niger",
      "Ogun"
    ],
    "answer": "Gembu"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Bauchi State?",
    "options": [
      "Bauchi",
      "Benin City",
      "River Benue",
      "Rivers"
    ],
    "answer": "Bauchi"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Minna as its capital?",
    "options": [
      "Jos",
      "Adamawa",
      "Rivers",
      "Niger"
    ],
    "answer": "Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Taraba State?",
    "options": [
      "Abuja",
      "Imo",
      "Jalingo",
      "Birnin Kebbi"
    ],
    "answer": "Jalingo"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Gusau as its capital?",
    "options": [
      "Ekiti",
      "River Niger",
      "Nsukka",
      "Zamfara"
    ],
    "answer": "Zamfara"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Ebonyi State?",
    "options": [
      "Anambra",
      "Jos",
      "Abakaliki",
      "Kaduna"
    ],
    "answer": "Abakaliki"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which Nigerian state has Lafia as its capital?",
    "options": [
      "Rivers",
      "Jos",
      "Imo",
      "Nasarawa"
    ],
    "answer": "Nasarawa"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Borno State?",
    "options": [
      "Maiduguri",
      "Ilorin",
      "Rivers",
      "Ogun"
    ],
    "answer": "Maiduguri"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Jigawa State?",
    "options": [
      "Dutse",
      "Cross River",
      "Lagos",
      "Gembu"
    ],
    "answer": "Dutse"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is the capital of Kebbi State?",
    "options": [
      "Birnin Kebbi",
      "Maiduguri",
      "Kaduna",
      "Ikeja"
    ],
    "answer": "Birnin Kebbi"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state is associated with the Obudu Cattle Ranch?",
    "options": [
      "Zamfara",
      "River Niger",
      "Cross River",
      "Niger"
    ],
    "answer": "Cross River"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which is the smallest state in Nigeria by land area?",
    "options": [
      "Ondo",
      "Adamawa",
      "Dutse",
      "Lagos"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state shares a border with the Republic of Benin?",
    "options": [
      "Ondo",
      "Ogun",
      "Cross River",
      "River Niger"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which state shares a border with Niger Republic?",
    "options": [
      "River Niger",
      "Birnin Kebbi",
      "Akwa Ibom",
      "Sokoto"
    ],
    "answer": "Sokoto"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Nigeria?",
    "options": [
      "Atlantic Ocean",
      "Abuja",
      "Ibadan",
      "Birnin Kebbi"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is the most populous in Nigeria?",
    "options": [
      "Ikeja",
      "Nsukka",
      "Lagos",
      "Zamfara"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which ocean is located to the south of Nigeria?",
    "options": [
      "Ondo",
      "Atlantic Ocean",
      "Kaduna",
      "Cross River"
    ],
    "answer": "Atlantic Ocean"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the name of the river that forms a delta in southern Nigeria?",
    "options": [
      "Niger",
      "Abakaliki",
      "River Niger",
      "Zamfara"
    ],
    "answer": "River Niger"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "Which city is known as Nigeria’s commercial capital?",
    "options": [
      "Lagos",
      "Adamawa",
      "Jos",
      "Port Harcourt"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Geography",
    "difficulty": "Easy",
    "question": "What is the capital of Lagos State?",
    "options": [
      "Ikeja",
      "Sokoto",
      "Cross River",
      "Lagos"
    ],
    "answer": "Ikeja"
  },




















































  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which Nigerian tribe is famous for bronze sculpture?",
    options: ["Yoruba", "Igbo", "Benin", "Hausa"],
    answer: "Benin"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the meaning of 'Omugwo' in Igbo culture?",
    options: ["Wedding ceremony", "Child-naming", "Post-natal care", "Title taking"],
    answer: "Post-natal care"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which tribe celebrates the 'Durbar Festival'?",
    options: ["Yoruba", "Hausa", "Igbo", "Tiv"],
    answer: "Hausa"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the traditional attire for Tiv men?",
    options: ["Aso Oke", "Isi Agu", "Black and white stripes", "Danshiki"],
    answer: "Black and white stripes"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which festival involves masquerades known as 'Egungun'?",
    options: ["Eyo", "Durbar", "Egungun", "Osun-Osogbo"],
    answer: "Egungun"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which Nigerian tribe is known for the 'Igue Festival'?",
    options: ["Hausa", "Yoruba", "Benin", "Ijaw"],
    answer: "Benin"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the 'Eyo Festival' primarily associated with?",
    options: ["Lagos", "Kano", "Calabar", "Abuja"],
    answer: "Lagos"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the name of the Fulani traditional dance?",
    options: ["Swange", "Sharo", "Bata", "Ekombi"],
    answer: "Sharo"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "In Yoruba land, what is a 'Babalawo'?",
    options: ["Herbalist", "Drummer", "Masquerade", "King"],
    answer: "Herbalist"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which ethnic group is known for the 'Ekpe' society?",
    options: ["Yoruba", "Efik", "Hausa", "Igbo"],
    answer: "Efik"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is 'Ekombi' in Efik culture?",
    options: ["Soup", "Dance", "Greeting", "Title"],
    answer: "Dance"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "The Yoruba talking drum is known as?",
    options: ["Gangan", "Bata", "Dundun", "Sakara"],
    answer: "Gangan"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which tribe uses the 'Isi Agu' attire?",
    options: ["Yoruba", "Igbo", "Hausa", "Tiv"],
    answer: "Igbo"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "The Igbo 'Ozo' title represents what?",
    options: ["Kingship", "Wealth", "Chieftaincy", "Warriorhood"],
    answer: "Chieftaincy"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What is the significance of the New Yam Festival?",
    options: ["Rain harvest", "Marriage", "Wealth", "Fertility and harvest"],
    answer: "Fertility and harvest"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "What does the Hausa name 'Sarki' mean?",
    options: ["Warrior", "Chief", "King", "Scholar"],
    answer: "King"
  },
  {
    category: "Culture",
    difficulty: "Easy",
    question: "Which Nigerian culture practices 'Sharo' as a rite of passage?",
    options: ["Hausa", "Tiv", "Fulani", "Igbo"],
    answer: "Fulani"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is 'Igbankwu'?",
    options: ["Igbo dance", "Traditional wedding", "Naming ceremony", "Funeral rite"],
    answer: "Traditional wedding"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is the traditional greeting in Yoruba?",
    options: ["Kedu", "Ina kwana", "E kaaro", "Sannu"],
    answer: "E kaaro"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which tribe celebrates 'Ofala Festival'?",
    options: ["Igbo", "Hausa", "Yoruba", "Ibibio"],
    answer: "Igbo"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What does 'Oba' mean in Yoruba?",
    options: ["Father", "Leader", "Chief", "King"],
    answer: "King"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Where is the Osun-Osogbo festival held?",
    options: ["Ondo", "Ekiti", "Osun", "Kwara"],
    answer: "Osun"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is the cultural attire of the Efik people?",
    options: ["Isi Agu", "Wrapper and blouse", "Aso Oke", "Danshiki"],
    answer: "Wrapper and blouse"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "The traditional dance of the Tiv people is?",
    options: ["Atilogwu", "Sharo", "Swange", "Ekombi"],
    answer: "Swange"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What do masquerades represent in many Nigerian cultures?",
    options: ["Entertainers", "Ancestors", "Kings", "Fishermen"],
    answer: "Ancestors"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is the Igbo traditional music instrument?",
    options: ["Gangan", "Ogene", "Shekere", "Kora"],
    answer: "Ogene"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which state is popular for the Eyo Festival?",
    options: ["Ogun", "Kwara", "Lagos", "Ekiti"],
    answer: "Lagos"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which tribe is known for the 'Atilogwu' dance?",
    options: ["Efik", "Yoruba", "Igbo", "Hausa"],
    answer: "Igbo"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is 'Aso Ebi'?",
    options: ["Gown", "Family cloth", "Bead", "Food"],
    answer: "Family cloth"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which tribe uses beads to show royalty?",
    options: ["Yoruba", "Ibibio", "Tiv", "All of the above"],
    answer: "All of the above"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which food is typically served at Yoruba parties?",
    options: ["Pounded yam", "Jollof rice", "Amala", "Efo"],
    answer: "Amala"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is the Hausa naming ceremony called?",
    options: ["Aqiqah", "Suna", "Omugwo", "Ofala"],
    answer: "Suna"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "Which attire do Yoruba kings wear?",
    options: ["Aso Oke", "Isi Agu", "Danshiki", "Agbada"],
    answer: "Aso Oke"
  },
  {
    category: "Culture",
    difficulty: "Medium",
    question: "What is the purpose of the Igue festival?",
    options: ["Title giving", "Coronation", "Spiritual cleansing", "Funeral"],
    answer: "Spiritual cleansing"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which tribe practises 'Ekpe' secret society?",
    options: ["Yoruba", "Ibibio", "Efik", "Tiv"],
    answer: "Efik"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What does 'Igba nkwu' mean?",
    options: ["Yam festival", "Wine carrying", "Initiation", "Prayer"],
    answer: "Wine carrying"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What is the Yoruba drum ensemble called?",
    options: ["Oriki", "Dundun", "Bata", "Gangan"],
    answer: "Dundun"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Where is the Argungu Fishing Festival held?",
    options: ["Kano", "Sokoto", "Kebbi", "Zamfara"],
    answer: "Kebbi"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which tribe traditionally wears coral beads?",
    options: ["Igbo", "Hausa", "Fulani", "Tiv"],
    answer: "Igbo"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which tribe has a king called 'Obong'?",
    options: ["Efik", "Yoruba", "Hausa", "Nupe"],
    answer: "Efik"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What does 'Sango' represent in Yoruba mythology?",
    options: ["Thunder god", "Water spirit", "River goddess", "Warrior"],
    answer: "Thunder god"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What is the Yoruba religion traditionally called?",
    options: ["Islam", "Odinani", "Ifa", "Santeria"],
    answer: "Ifa"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which tribe is associated with the Benin Kingdom?",
    options: ["Igbo", "Yoruba", "Edo", "Itsekiri"],
    answer: "Edo"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "In Tiv culture, what is 'Swem'?",
    options: ["Bead", "Spiritual oath", "Dance", "Wedding"],
    answer: "Spiritual oath"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "The Igbo perform 'Iri ji' to celebrate?",
    options: ["Corn", "Palm wine", "New yam", "Fufu"],
    answer: "New yam"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What is 'Nkwa' in Igbo culture?",
    options: ["Greeting", "Dance", "Music", "Name"],
    answer: "Dance"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which people have the 'Kwararafa Confederacy' history?",
    options: ["Idoma", "Jukun", "Nupe", "Ebira"],
    answer: "Jukun"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "Which Nigerian people celebrate 'Iriji Mmanwu'?",
    options: ["Igbo", "Yoruba", "Ijaw", "Hausa"],
    answer: "Igbo"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "The 'Sango Festival' is held in which state?",
    options: ["Oyo", "Osun", "Ekiti", "Kwara"],
    answer: "Oyo"
  },
  {
    category: "Culture",
    difficulty: "Hard",
    question: "What is the traditional Yoruba praise poetry called?",
    options: ["Ifa", "Ewi", "Oriki", "Ijala"],
    answer: "Oriki"
  },
  
{
  category: 'Naija Sports',
  difficulty: 'Easy',
  question: 'Which Nigerian footballer scored the winning goal in the 2013 AFCON final?',
  options: ['Ahmed Musa', 'Sunday Mba', 'Victor Moses', 'John Obi Mikel'],
  answer: 'Sunday Mba'
},
{
  category: 'Naija Sports',
  difficulty: 'Easy',
  question: 'The Nigerian men’s basketball team is popularly known as what?',
  options: ['The Eagles', 'D\'Tigers', 'Naija Dunkers', 'Green Giants'],
  answer: 'D\'Tigers'
},
{
  category: 'Naija Sports',
  difficulty: 'Easy',
  question: 'Chioma Ajunwa won Nigeria’s first individual Olympic gold in which city?',
  options: ['Barcelona 1992', 'Atlanta 1996', 'Sydney 2000', 'Beijing 2008'],
  answer : 'Atlanta 1996'
},
 
{
  category: 'Naija Sports',
  difficulty: 'Hard',
  question: 'Which Nigerian footballer once scored in four different AFCON tournaments?',
  options: ['Victor Ikpeba', 'Ahmed Musa', 'Jay-Jay Okocha', 'Nwankwo Kanu'],
  answer : 'Ahmed Musa'
},








  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer once scored in four different AFCON tournaments?",
    "options": [
      "Victor Ikpeba",
      "Ahmed Musa",
      "Jay-Jay Okocha",
      "Nwankwo Kanu"
    ],
    "answer": "Ahmed Musa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian sprinter was the first to qualify for the Olympics in 1980?",
    "options": [
      "Innocent Egbunike",
      "Chidi Imoh",
      "Adebayo Adekoya",
      "Hassan Bosso"
    ],
    "answer": "Chidi Imoh"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete competed in both wrestling and weightlifting at the African Games?",
    "options": [
      "Loveline Obiji",
      "Blessing Onyebuchi",
      "Maryann Ugwumba",
      "Blessing Oborududu"
    ],
    "answer": "Blessing Onyebuchi"
  },








  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which state\u2019s team is known as the \u201cBendel Insurance\u201d?",
    "options": [
      "Edo",
      "Delta",
      "Kogi",
      "Cross River"
    ],
    "answer": "Edo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian U-20 team player scored 5 goals in 2023 AFCON U-20?",
    "options": [
      "Salim Fago Lawal",
      "Victor Eletu",
      "Jude Sunday",
      "Samson Lawal"
    ],
    "answer": "Salim Fago Lawal"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What sport does Nigeria\u2019s \u201cYellow Greens\u201d national team play?",
    "options": [
      "Handball",
      "Cricket",
      "Basketball",
      "Hockey"
    ],
    "answer": "Cricket"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian goalkeeper played for Lille in France?",
    "options": [
      "Francis Uzoho",
      "Vincent Enyeama",
      "Carl Ikeme",
      "Daniel Akpeyi"
    ],
    "answer": "Vincent Enyeama"
  },






  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "The Nigerian national football team is popularly known as what?",
    "options": [
      "Super Eagles",
      "Green Falcons",
      "Naija Warriors",
      "African Lions"
    ],
    "answer": "Super Eagles"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "The Nigerian women\u2019s football team is popularly called what?",
    "options": [
      "Super Queens",
      "Green Ladies",
      "Falconets",
      "Super Falcons"
    ],
    "answer": "Super Falcons"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What sport is Chioma Ajunwa famous for?",
    "options": [
      "High Jump",
      "Long Jump",
      "Javelin",
      "Hurdles"
    ],
    "answer": "Long Jump"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the nickname of the Nigerian U-20 men\u2019s football team?",
    "options": [
      "Golden Stars",
      "Junior Eagles",
      "Flying Eagles",
      "Green Warriors"
    ],
    "answer": "Flying Eagles"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the nickname of the Nigerian U-17 football team?",
    "options": [
      "Golden Eaglets",
      "Super Boys",
      "Naija Juniors",
      "Young Falcons"
    ],
    "answer": "Golden Eaglets"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Victor Osimhen plays which position in football?",
    "options": [
      "Goalkeeper",
      "Striker",
      "Midfielder",
      "Defender"
    ],
    "answer": "Striker"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian footballer is known for his dazzling dribbles and was nicknamed \u201cThe Magician\u201d?",
    "options": [
      "Jay-Jay Okocha",
      "Sunday Oliseh",
      "Mikel Obi",
      "Taribo West"
    ],
    "answer": "Jay-Jay Okocha"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which colour is NOT part of the Nigerian national football team\u2019s primary kit?",
    "options": [
      "Green",
      "White",
      "Black",
      "Red"
    ],
    "answer": "Red"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the governing body for football in Nigeria?",
    "options": [
      "NFF",
      "NNF",
      "NFA",
      "NFU"
    ],
    "answer": "NFF"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who is known as the \u201cPrince of Monaco\u201d in Nigerian football?",
    "options": [
      "Jay-Jay Okocha",
      "Victor Ikpeba",
      "Nwankwo Kanu",
      "Sunday Oliseh"
    ],
    "answer": "Victor Ikpeba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which sport is most associated with Nigeria internationally?",
    "options": [
      "Basketball",
      "Football",
      "Boxing",
      "Athletics"
    ],
    "answer": "Football"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What colour are the Super Eagles\u2019 home jerseys traditionally?",
    "options": [
      "White",
      "Red",
      "Green",
      "Blue"
    ],
    "answer": "Green"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian team is referred to as the \u201cGolden Eaglets\u201d?",
    "options": [
      "U-23",
      "U-20",
      "U-17",
      "Super Falcons"
    ],
    "answer": "U-17"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria\u2019s senior women\u2019s national football team?",
    "options": [
      "Naija Queens",
      "Falconets",
      "Super Falcons",
      "Green Angels"
    ],
    "answer": "Super Falcons"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who is a famous Nigerian striker known for playing at Napoli?",
    "options": [
      "Odion Ighalo",
      "Victor Osimhen",
      "Ahmed Musa",
      "Emmanuel Emenike"
    ],
    "answer": "Victor Osimhen"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which state in Nigeria is famous for producing top athletes like Tobi Amusan?",
    "options": [
      "Edo",
      "Ogun",
      "Delta",
      "Enugu"
    ],
    "answer": "Ogun"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian female footballer played for Barcelona Women?",
    "options": [
      "Rasheedat Ajibade",
      "Asisat Oshoala",
      "Ngozi Okobi",
      "Desire Oparanozie"
    ],
    "answer": "Asisat Oshoala"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the governing body for football in Nigeria?",
    "options": [
      "NFU",
      "NFA",
      "NFF",
      "NFC"
    ],
    "answer": "NFF"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Nigeria\u2019s national football team won AFCON in which of these years?",
    "options": [
      "1990",
      "1994",
      "1998",
      "2002"
    ],
    "answer": "1994"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the Super Eagles\u2019 FIFA jersey number colour mostly printed in?",
    "options": [
      "Black",
      "Red",
      "White",
      "Yellow"
    ],
    "answer": "White"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian club is based in Aba?",
    "options": [
      "Enugu Rangers",
      "Enyimba FC",
      "Kano Pillars",
      "Sunshine Stars"
    ],
    "answer": "Enyimba FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who is known for the viral quote \u201cI no be your mate\u201d after scoring a goal?",
    "options": [
      "Ahmed Musa",
      "Odion Ighalo",
      "Sunday Mba",
      "Victor Osimhen"
    ],
    "answer": "Ahmed Musa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian footballer once played for Chelsea FC?",
    "options": [
      "Joseph Yobo",
      "Obafemi Martins",
      "Mikel Obi",
      "Taye Taiwo"
    ],
    "answer": "Mikel Obi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "In what sport did Nigeria win its first Olympic gold medal?",
    "options": [
      "Athletics",
      "Wrestling",
      "Football",
      "Basketball"
    ],
    "answer": "Athletics"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which of these sports has Nigeria NOT won an Olympic medal in?",
    "options": [
      "Boxing",
      "Basketball",
      "Weightlifting",
      "Wrestling"
    ],
    "answer": "Basketball"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the capital of Nigerian sports administration?",
    "options": [
      "Lagos",
      "Abuja",
      "Benin City",
      "Kaduna"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian footballer was known for his backflips after scoring?",
    "options": [
      "Jay-Jay Okocha",
      "Obafemi Martins",
      "Emmanuel Emenike",
      "Victor Anichebe"
    ],
    "answer": "Obafemi Martins"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who was Nigeria\u2019s goalkeeper during the 2013 AFCON win?",
    "options": [
      "Vincent Enyeama",
      "Chigozie Agbim",
      "Carl Ikeme",
      "Francis Uzoho"
    ],
    "answer": "Vincent Enyeama"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "The national team \u201cD\u2019Tigress\u201d represents Nigeria in what sport?",
    "options": [
      "Handball",
      "Volleyball",
      "Basketball",
      "Netball"
    ],
    "answer": "Basketball"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "In what year did Nigeria first qualify for the FIFA World Cup?",
    "options": [
      "1990",
      "1994",
      "1998",
      "2002"
    ],
    "answer": "1994"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria\u2019s top domestic football league?",
    "options": [
      "Nigeria Super League",
      "NPFL",
      "Naija Premier League",
      "National League"
    ],
    "answer": "NPFL"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who is often referred to as Nigeria\u2019s greatest female sprinter?",
    "options": [
      "Glory Alozie",
      "Mary Onyali",
      "Chioma Ajunwa",
      "Tobi Amusan"
    ],
    "answer": "Mary Onyali"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which city is known as the \u201chome of Nigerian football\u201d?",
    "options": [
      "Abuja",
      "Kaduna",
      "Lagos",
      "Ibadan"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What type of medal did Nigeria win in men\u2019s football at the 2008 Olympics?",
    "options": [
      "Gold",
      "Silver",
      "Bronze",
      "None"
    ],
    "answer": "Silver"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the name of Nigeria\u2019s national men\u2019s basketball team?",
    "options": [
      "D\u2019Tigers",
      "D\u2019Tigress",
      "Naija Hoopers",
      "Green Shooters"
    ],
    "answer": "D\u2019Tigers"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What sport is Quadri Aruna famous for?",
    "options": [
      "Wrestling",
      "Boxing",
      "Table Tennis",
      "Basketball"
    ],
    "answer": "Table Tennis"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who was the first Nigerian to win African Footballer of the Year?",
    "options": [
      "Stephen Keshi",
      "Rashidi Yekini",
      "Victor Ikpeba",
      "Finidi George"
    ],
    "answer": "Rashidi Yekini"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What country did Nigeria defeat in the 1996 Olympics final?",
    "options": [
      "Brazil",
      "Argentina",
      "Germany",
      "Spain"
    ],
    "answer": "Argentina"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What is the standard length of a football match?",
    "options": [
      "90 minutes",
      "60 minutes",
      "120 minutes",
      "80 minutes"
    ],
    "answer": "90 minutes"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which sport uses a bat, gloves, and stumps?",
    "options": [
      "Baseball",
      "Cricket",
      "Hockey",
      "Lacrosse"
    ],
    "answer": "Cricket"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Who is Nigeria\u2019s most capped football player?",
    "options": [
      "Vincent Enyeama",
      "Joseph Yobo",
      "Ahmed Musa",
      "Jay-Jay Okocha"
    ],
    "answer": "Ahmed Musa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which female Nigerian wrestler won Olympic silver in 2020?",
    "options": [
      "Odunayo Adekuoroye",
      "Blessing Oborududu",
      "Aminat Adeniyi",
      "Mercy Genesis"
    ],
    "answer": "Blessing Oborududu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What shape is used for a basketball court?",
    "options": [
      "Square",
      "Rectangle",
      "Circle",
      "Oval"
    ],
    "answer": "Rectangle"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "How many players are on a football team on the pitch?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": "11"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which Nigerian footballer captained Nigeria in the 2018 World Cup?",
    "options": [
      "John Obi Mikel",
      "Ahmed Musa",
      "Wilfred Ndidi",
      "Victor Moses"
    ],
    "answer": "John Obi Mikel"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "What do you call a goal scored with the head?",
    "options": [
      "Header",
      "Volley",
      "Chip",
      "Tackle"
    ],
    "answer": "Header"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Easy",
    "question": "Which team is nicknamed \u201cSai Masu Gida\u201d?",
    "options": [
      "Enyimba FC",
      "Kano Pillars",
      "Sunshine Stars",
      "Rangers"
    ],
    "answer": "Kano Pillars"
  },


  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who is the first Nigerian to win an Olympic gold medal?",
    "options": [
      "Chioma Ajunwa",
      "Mary Onyali",
      "Blessing Okagbare",
      "Falilat Ogunkoya"
    ],
    "answer": "Chioma Ajunwa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian footballer won the African Footballer of the Year in 1993?",
    "options": [
      "Jay-Jay Okocha",
      "Rashidi Yekini",
      "Emmanuel Amuneke",
      "Victor Ikpeba"
    ],
    "answer": "Rashidi Yekini"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "In which year did Nigeria win the Olympic gold medal in men\u2019s football?",
    "options": [
      "1992",
      "1996",
      "2000",
      "2004"
    ],
    "answer": "1996"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian boxer became a heavyweight champion in the 1980s?",
    "options": [
      "David Izon",
      "Samuel Peter",
      "Ike Ibeabuchi",
      "Bash Ali"
    ],
    "answer": "Bash Ali"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who was the first Nigerian to play in the English Premier League?",
    "options": [
      "Daniel Amokachi",
      "Finidi George",
      "John Fashanu",
      "Austin Okocha"
    ],
    "answer": "John Fashanu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian sprinter was banned for doping in 2021?",
    "options": [
      "Divine Oduduru",
      "Blessing Okagbare",
      "Ezinne Okparaebo",
      "Ese Brume"
    ],
    "answer": "Blessing Okagbare"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian club has won the most NPFL (Nigeria Premier Football League) titles?",
    "options": [
      "Enyimba FC",
      "Rangers International",
      "Kano Pillars",
      "Shooting Stars"
    ],
    "answer": "Enyimba FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which city hosted the 2003 All Africa Games in Nigeria?",
    "options": [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Kano"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian female wrestler won gold at the 2022 Commonwealth Games?",
    "options": [
      "Odunayo Adekuoroye",
      "Blessing Oborududu",
      "Aminat Adeniyi",
      "Mercy Genesis"
    ],
    "answer": "Odunayo Adekuoroye"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which sport is Blessing Oborududu known for?",
    "options": [
      "Wrestling",
      "Boxing",
      "Athletics",
      "Weightlifting"
    ],
    "answer": "Wrestling"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which sport does Ese Brume compete in?",
    "options": [
      "Shot Put",
      "High Jump",
      "Long Jump",
      "Pole Vault"
    ],
    "answer": "Long Jump"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "How many times has Nigeria won the Africa Cup of Nations (AFCON) as of 2025?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "3"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who was the first Nigerian to play for FC Barcelona?",
    "options": [
      "Haruna Babangida",
      "Samuel Okwaraji",
      "Finidi George",
      "Sunday Oliseh"
    ],
    "answer": "Haruna Babangida"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian player famously wore green and white braids during the 1998 World Cup?",
    "options": [
      "Taribo West",
      "Jay-Jay Okocha",
      "Mutiu Adepoju",
      "Celestine Babayaro"
    ],
    "answer": "Taribo West"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who captained Nigeria to their first Olympic gold in football?",
    "options": [
      "Jay-Jay Okocha",
      "Nwankwo Kanu",
      "Uche Okechukwu",
      "Sunday Oliseh"
    ],
    "answer": "Nwankwo Kanu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian sprinter won silver at the 1992 Olympics 4x100m relay?",
    "options": [
      "Olapade Adeniken",
      "Francis Obikwelu",
      "Davidson Ezinwa",
      "Innocent Egbunike"
    ],
    "answer": "Olapade Adeniken"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which state in Nigeria is known for producing many professional footballers?",
    "options": [
      "Lagos",
      "Kano",
      "Kaduna",
      "Edo"
    ],
    "answer": "Edo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian team won the FIFA U-17 World Cup in 2015?",
    "options": [
      "Flying Eagles",
      "Dream Team",
      "Golden Eaglets",
      "Naija Stars"
    ],
    "answer": "Golden Eaglets"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What is the home stadium of Enyimba FC?",
    "options": [
      "Teslim Balogun Stadium",
      "Enyimba International Stadium",
      "Aba Township Stadium",
      "Samuel Ogbemudia Stadium"
    ],
    "answer": "Enyimba International Stadium"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian athlete is known for triple jump success?",
    "options": [
      "Tosin Oke",
      "Blessing Okagbare",
      "Ese Brume",
      "Mary Onyali"
    ],
    "answer": "Tosin Oke"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian won the CAF Young Player of the Year in 2013?",
    "options": [
      "Kelechi Iheanacho",
      "Wilfred Ndidi",
      "Victor Moses",
      "Kenneth Omeruo"
    ],
    "answer": "Kelechi Iheanacho"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian footballer is known for his strong defensive play and unique hairstyles?",
    "options": [
      "Taribo West",
      "Taye Taiwo",
      "Joseph Yobo",
      "Efe Ambrose"
    ],
    "answer": "Taribo West"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which city hosted the 2022 National Sports Festival in Nigeria?",
    "options": [
      "Benin City",
      "Abeokuta",
      "Asaba",
      "Calabar"
    ],
    "answer": "Asaba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What year did Nigeria last host the FIFA U-17 World Cup?",
    "options": [
      "2005",
      "2007",
      "2009",
      "2011"
    ],
    "answer": "2009"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian player is known for his long-range goals, including one against Spain in 1998?",
    "options": [
      "Sunday Oliseh",
      "Wilson Oruma",
      "Finidi George",
      "Mutiu Adepoju"
    ],
    "answer": "Sunday Oliseh"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian female athlete competed in five Olympic Games?",
    "options": [
      "Mary Onyali",
      "Blessing Okagbare",
      "Glory Alozie",
      "Chioma Ajunwa"
    ],
    "answer": "Mary Onyali"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian was the top scorer at the 2015 U-17 World Cup?",
    "options": [
      "Kelechi Nwakali",
      "Taiwo Awoniyi",
      "Victor Osimhen",
      "Samuel Chukwueze"
    ],
    "answer": "Victor Osimhen"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian footballer played for Inter Milan and Portsmouth?",
    "options": [
      "Nwankwo Kanu",
      "Obafemi Martins",
      "Taribo West",
      "John Utaka"
    ],
    "answer": "Nwankwo Kanu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian striker was known as \u201cObagoal\u201d?",
    "options": [
      "Victor Agali",
      "Obafemi Martins",
      "Yakubu Aiyegbeni",
      "Julius Aghahowa"
    ],
    "answer": "Obafemi Martins"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian athlete broke the African women\u2019s 100m hurdles record in 2022?",
    "options": [
      "Blessing Okagbare",
      "Glory Alozie",
      "Tobi Amusan",
      "Chioma Ajunwa"
    ],
    "answer": "Tobi Amusan"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What is the nickname of Nigeria\u2019s men\u2019s volleyball team?",
    "options": [
      "Green Spikers",
      "Naija Smashers",
      "Super Nets",
      "The Blockers"
    ],
    "answer": "Green Spikers"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What is the name of the Nigerian women\u2019s cricket team?",
    "options": [
      "Naija Queens",
      "Lady Yellows",
      "Female Yellow Greens",
      "Nigerian Strikers"
    ],
    "answer": "Female Yellow Greens"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian player scored against Iceland at the 2018 FIFA World Cup?",
    "options": [
      "John Obi Mikel",
      "Victor Moses",
      "Odion Ighalo",
      "Ahmed Musa"
    ],
    "answer": "Ahmed Musa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which state does Bendel Insurance FC represent?",
    "options": [
      "Delta",
      "Edo",
      "Rivers",
      "Anambra"
    ],
    "answer": "Edo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian athlete was banned after a failed dope test in 2021 Olympics?",
    "options": [
      "Divine Oduduru",
      "Blessing Okagbare",
      "Tobi Amusan",
      "Chukwuebuka Enekwechi"
    ],
    "answer": "Blessing Okagbare"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian striker played for Napoli and helped win the 2022\u201323 Serie A?",
    "options": [
      "Taiwo Awoniyi",
      "Victor Osimhen",
      "Sadiq Umar",
      "Odion Ighalo"
    ],
    "answer": "Victor Osimhen"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian won gold in wrestling at the 2020 Tokyo Olympics?",
    "options": [
      "Blessing Oborududu",
      "Odunayo Adekuoroye",
      "Aminat Adeniyi",
      "Mercy Genesis"
    ],
    "answer": "Blessing Oborududu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian club won the NPFL title back-to-back in 2003 and 2004?",
    "options": [
      "Kano Pillars",
      "Rangers International",
      "Enyimba FC",
      "Shooting Stars"
    ],
    "answer": "Enyimba FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who scored Nigeria\u2019s only goal against Bosnia at the 2014 World Cup?",
    "options": [
      "Ahmed Musa",
      "Peter Odemwingie",
      "John Obi Mikel",
      "Emmanuel Emenike"
    ],
    "answer": "Peter Odemwingie"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian boxer was known as the \u201cNigerian Nightmare\u201d?",
    "options": [
      "Bash Ali",
      "Samuel Peter",
      "Ike Ibeabuchi",
      "David Izon"
    ],
    "answer": "Samuel Peter"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian female footballer has played in four Women\u2019s World Cups?",
    "options": [
      "Desire Oparanozie",
      "Asisat Oshoala",
      "Onome Ebi",
      "Perpetua Nkwocha"
    ],
    "answer": "Onome Ebi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What position does Wilfred Ndidi play in football?",
    "options": [
      "Goalkeeper",
      "Striker",
      "Defender",
      "Midfielder"
    ],
    "answer": "Midfielder"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which state is home to Sunshine Stars Football Club?",
    "options": [
      "Edo",
      "Ogun",
      "Ondo",
      "Oyo"
    ],
    "answer": "Ondo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian footballer played for both Arsenal and Everton?",
    "options": [
      "Yakubu Aiyegbeni",
      "Victor Anichebe",
      "Kelechi Nwakali",
      "Alex Iwobi"
    ],
    "answer": "Alex Iwobi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who scored the winning goal in the 2013 AFCON final for Nigeria?",
    "options": [
      "Victor Moses",
      "Sunday Mba",
      "Emmanuel Emenike",
      "Ahmed Musa"
    ],
    "answer": "Sunday Mba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian city is famous for the Okpekpe 10km road race?",
    "options": [
      "Aba",
      "Benin",
      "Uyo",
      "Auchi"
    ],
    "answer": "Auchi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What medal did Ese Brume win at the 2022 World Athletics Championships?",
    "options": [
      "Gold",
      "Silver",
      "Bronze",
      "None"
    ],
    "answer": "Silver"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which team did Nigeria beat 4\u20130 in their 2023 AFCON qualifier?",
    "options": [
      "Sierra Leone",
      "Ghana",
      "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
      "South Africa"
    ],
    "answer": "S\u00e3o Tom\u00e9 and Pr\u00edncipe"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian female athlete ran in the World Athletics Diamond League final 2022?",
    "options": [
      "Tobi Amusan",
      "Blessing Okagbare",
      "Mary Onyali",
      "Glory Alozie"
    ],
    "answer": "Tobi Amusan"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "In what year did Nigeria host the FIFA U-20 World Cup?",
    "options": [
      "1999",
      "2005",
      "2009",
      "2011"
    ],
    "answer": "1999"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which former Nigerian footballer coached the Super Eagles to third place at AFCON 2004?",
    "options": [
      "Shuaibu Amodu",
      "Austin Eguavoen",
      "Stephen Keshi",
      "Christian Chukwu"
    ],
    "answer": "Christian Chukwu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What year did Enyimba win their second CAF Champions League title?",
    "options": [
      "2003",
      "2004",
      "2005",
      "2006"
    ],
    "answer": "2004"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which club does Asisat Oshoala currently play for (as of 2024)?",
    "options": [
      "Real Madrid",
      "Paris FC",
      "Barcelona Femen\u00ed",
      "Chelsea Women"
    ],
    "answer": "Barcelona Femen\u00ed"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian track athlete competed in five Olympic Games?",
    "options": [
      "Tobi Amusan",
      "Mary Onyali",
      "Blessing Okagbare",
      "Chioma Ajunwa"
    ],
    "answer": "Mary Onyali"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which player scored the most goals for Nigeria at the U-17 level?",
    "options": [
      "Kelechi Iheanacho",
      "Sani Emmanuel",
      "Victor Osimhen",
      "Taiwo Awoniyi"
    ],
    "answer": "Victor Osimhen"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who was the coach of the Super Eagles during the 2018 World Cup?",
    "options": [
      "Stephen Keshi",
      "Austin Eguavoen",
      "Gernot Rohr",
      "Samson Siasia"
    ],
    "answer": "Gernot Rohr"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian wrestler has consistently medaled at Commonwealth Games?",
    "options": [
      "Odunayo Adekuoroye",
      "Blessing Oborududu",
      "Aminat Adeniyi",
      "Mercy Genesis"
    ],
    "answer": "Odunayo Adekuoroye"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which state is home to the Nigeria national football stadium, Moshood Abiola Stadium?",
    "options": [
      "Lagos",
      "Abuja",
      "Kano",
      "Enugu"
    ],
    "answer": "Abuja"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian striker played for Watford and Manchester United?",
    "options": [
      "Odion Ighalo",
      "Kelechi Iheanacho",
      "Taiwo Awoniyi",
      "Victor Osimhen"
    ],
    "answer": "Odion Ighalo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian club was founded in 1976 and is based in Ibadan?",
    "options": [
      "Kano Pillars",
      "Shooting Stars",
      "Rangers International",
      "Heartland FC"
    ],
    "answer": "Shooting Stars"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What sport does Chukwuebuka Enekwechi specialise in?",
    "options": [
      "High Jump",
      "Shot Put",
      "Triple Jump",
      "Discus"
    ],
    "answer": "Shot Put"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What team did Nigeria defeat to win bronze at the 2019 AFCON?",
    "options": [
      "Algeria",
      "Tunisia",
      "Egypt",
      "South Africa"
    ],
    "answer": "Tunisia"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian female athlete has represented Nigeria in both football and track?",
    "options": [
      "Chioma Ajunwa",
      "Blessing Okagbare",
      "Mary Onyali",
      "Perpetua Nkwocha"
    ],
    "answer": "Chioma Ajunwa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian goalkeeper captained the Super Eagles in the early 2010s?",
    "options": [
      "Carl Ikeme",
      "Francis Uzoho",
      "Vincent Enyeama",
      "Dele Alampasu"
    ],
    "answer": "Vincent Enyeama"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian city has hosted the National Sports Festival the most times?",
    "options": [
      "Benin City",
      "Lagos",
      "Abuja",
      "Kaduna"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What Nigerian footballer played for both PSG and Bolton Wanderers?",
    "options": [
      "Sunday Oliseh",
      "Jay-Jay Okocha",
      "John Obi Mikel",
      "Daniel Amokachi"
    ],
    "answer": "Jay-Jay Okocha"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Who was Nigeria\u2019s captain at the 1996 Olympic football tournament?",
    "options": [
      "Sunday Oliseh",
      "Uche Okechukwu",
      "Nwankwo Kanu",
      "Taribo West"
    ],
    "answer": "Nwankwo Kanu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which club is known as \u201cThe People\u2019s Elephant\u201d?",
    "options": [
      "Kano Pillars",
      "Enugu Rangers",
      "Enyimba FC",
      "3SC"
    ],
    "answer": "Enyimba FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which team did the Super Eagles play in their first ever World Cup match?",
    "options": [
      "Italy",
      "Argentina",
      "Greece",
      "Bulgaria"
    ],
    "answer": "Bulgaria"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian footballer won the UEFA Europa League in 2013 with Chelsea?",
    "options": [
      "Mikel Obi",
      "Victor Moses",
      "Kenneth Omeruo",
      "John Utaka"
    ],
    "answer": "Victor Moses"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which state\u2019s team is known as the \u201cBendel Insurance\u201d?",
    "options": [
      "Edo",
      "Delta",
      "Kogi",
      "Cross River"
    ],
    "answer": "Edo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian U-20 team player scored 5 goals in 2023 AFCON U-20?",
    "options": [
      "Salim Fago Lawal",
      "Victor Eletu",
      "Jude Sunday",
      "Samson Lawal"
    ],
    "answer": "Salim Fago Lawal"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "What sport does Nigeria\u2019s \u201cYellow Greens\u201d national team play?",
    "options": [
      "Handball",
      "Cricket",
      "Basketball",
      "Hockey"
    ],
    "answer": "Cricket"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Medium",
    "question": "Which Nigerian goalkeeper played for Lille in France?",
    "options": [
      "Francis Uzoho",
      "Vincent Enyeama",
      "Carl Ikeme",
      "Daniel Akpeyi"
    ],
    "answer": "Vincent Enyeama"
  },


  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was the coach when Nigeria won the AFCON in 2013?",
    "options": [
      "Stephen Keshi",
      "Christian Chukwu",
      "Samson Siasia",
      "Shuaibu Amodu"
    ],
    "answer": "Stephen Keshi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "How many gold medals did Nigeria win at the 1996 Atlanta Olympics?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian Paralympian has won multiple gold medals in powerlifting?",
    "options": [
      "Lucy Ejike",
      "Folashade Oluwafemiayo",
      "Yakubu Adesokan",
      "Esther Oyema"
    ],
    "answer": "Lucy Ejike"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What is the name of the Nigerian footballer who played for Chelsea and won the Champions League in 2012?",
    "options": [
      "Obafemi Martins",
      "Victor Moses",
      "Mikel Obi",
      "Kenneth Omeruo"
    ],
    "answer": "Mikel Obi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer was nicknamed \u201cThe Bull\u201d?",
    "options": [
      "Daniel Amokachi",
      "Yakubu Aiyegbeni",
      "Obafemi Martins",
      "Uche Okechukwu"
    ],
    "answer": "Daniel Amokachi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was Nigeria\u2019s head coach at the 1994 FIFA World Cup?",
    "options": [
      "Clemens Westerhof",
      "Shuaibu Amodu",
      "Stephen Keshi",
      "Christian Chukwu"
    ],
    "answer": "Clemens Westerhof"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete won bronze in long jump at the Tokyo 2020 Olympics?",
    "options": [
      "Blessing Okagbare",
      "Ese Brume",
      "Chioma Ajunwa",
      "Patience Okon"
    ],
    "answer": "Ese Brume"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What club did Rashidi Yekini play for when he won the African Footballer of the Year?",
    "options": [
      "Vitoria Setubal",
      "Shooting Stars",
      "Abidjan FC",
      "Africa Sports"
    ],
    "answer": "Africa Sports"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian club reached the CAF Champions League final in 2009?",
    "options": [
      "Enyimba FC",
      "Kano Pillars",
      "Heartland FC",
      "Rangers International"
    ],
    "answer": "Heartland FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian sprinter was part of the 4x100m team stripped of their Olympic medal?",
    "options": [
      "Olapade Adeniken",
      "Francis Obikwelu",
      "Davidson Ezinwa",
      "Innocent Egbunike"
    ],
    "answer": "Davidson Ezinwa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Nigeria won their first AFCON title in which year?",
    "options": [
      "1980",
      "1982",
      "1984",
      "1976"
    ],
    "answer": "1980"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer once captained PSG?",
    "options": [
      "Sunday Oliseh",
      "Jay-Jay Okocha",
      "Vincent Enyeama",
      "Mutiu Adepoju"
    ],
    "answer": "Jay-Jay Okocha"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian goalkeeper played for Lille and was known for saving penalties?",
    "options": [
      "Carl Ikeme",
      "Vincent Enyeama",
      "Ike Shorunmu",
      "Chigozie Agbim"
    ],
    "answer": "Vincent Enyeama"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete switched nationality to represent Portugal in athletics?",
    "options": [
      "Olapade Adeniken",
      "Francis Obikwelu",
      "Davidson Ezinwa",
      "Blessing Okagbare"
    ],
    "answer": "Francis Obikwelu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was Nigeria\u2019s top scorer at the 1994 FIFA World Cup?",
    "options": [
      "Finidi George",
      "Daniel Amokachi",
      "Rashidi Yekini",
      "Emmanuel Amuneke"
    ],
    "answer": "Rashidi Yekini"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who is Nigeria\u2019s most decorated Paralympian in powerlifting?",
    "options": [
      "Esther Oyema",
      "Lucy Ejike",
      "Loveline Obiji",
      "Ndidi Nwosu"
    ],
    "answer": "Lucy Ejike"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What team did Nigeria beat in the final of the 2013 AFCON?",
    "options": [
      "Ivory Coast",
      "Burkina Faso",
      "Ghana",
      "Mali"
    ],
    "answer": "Burkina Faso"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which female Nigerian athlete was stripped of a gold medal at the Commonwealth Games?",
    "options": [
      "Blessing Okagbare",
      "Chioma Ajunwa",
      "Glory Alozie",
      "Mary Onyali"
    ],
    "answer": "Blessing Okagbare"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who scored Nigeria\u2019s winning goal against Brazil in the 1996 Olympics semi-final?",
    "options": [
      "Nwankwo Kanu",
      "Celestine Babayaro",
      "Wilson Oruma",
      "Victor Ikpeba"
    ],
    "answer": "Nwankwo Kanu"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer scored a hat-trick against Spain at the U-17 World Cup?",
    "options": [
      "Victor Osimhen",
      "Taiwo Awoniyi",
      "Kelechi Iheanacho",
      "Sani Emmanuel"
    ],
    "answer": "Victor Osimhen"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who captained Nigeria at the 2018 FIFA World Cup?",
    "options": [
      "Ahmed Musa",
      "John Obi Mikel",
      "Kenneth Omeruo",
      "Victor Moses"
    ],
    "answer": "John Obi Mikel"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian female athlete won silver in 100m hurdles at the 2000 Olympics?",
    "options": [
      "Mary Onyali",
      "Glory Alozie",
      "Chioma Ajunwa",
      "Patience Okon"
    ],
    "answer": "Glory Alozie"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian boxer won the WBC heavyweight title in 2008?",
    "options": [
      "Ike Ibeabuchi",
      "Samuel Peter",
      "Bash Ali",
      "David Izon"
    ],
    "answer": "Samuel Peter"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian city hosted the 1973 All-Africa Games?",
    "options": [
      "Lagos",
      "Kaduna",
      "Ibadan",
      "Enugu"
    ],
    "answer": "Lagos"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What is the full name of NFF, the football body in Nigeria?",
    "options": [
      "Nigeria Football Federation",
      "Naija Football Forum",
      "National Football Foundation",
      "Nigerian Football Force"
    ],
    "answer": "Nigeria Football Federation"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which female Nigerian basketballer plays in the WNBA as of 2024?",
    "options": [
      "Ezinne Kalu",
      "Evelyn Akhator",
      "Promise Amukamara",
      "Adaora Elonu"
    ],
    "answer": "Evelyn Akhator"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer won the UEFA Europa League with Villarreal in 2021?",
    "options": [
      "Kelechi Iheanacho",
      "Samuel Chukwueze",
      "Victor Osimhen",
      "Joe Aribo"
    ],
    "answer": "Samuel Chukwueze"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was the Nigerian referee that officiated at the FIFA World Cup?",
    "options": [
      "Henry Ogunyamodi",
      "Sunday Omobolanle",
      "Linus Mba",
      "Baba Jada"
    ],
    "answer": "Linus Mba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete competed in both football and athletics professionally?",
    "options": [
      "Chioma Ajunwa",
      "Blessing Okagbare",
      "Mary Onyali",
      "Patience Okon"
    ],
    "answer": "Chioma Ajunwa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian club won the 2003 CAF Champions League?",
    "options": [
      "Kano Pillars",
      "Enyimba FC",
      "Heartland FC",
      "Rangers International"
    ],
    "answer": "Enyimba FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was Nigeria\u2019s coach during the 1996 Olympics gold medal win?",
    "options": [
      "Westerhof",
      "Stephen Keshi",
      "Jo Bonfrere",
      "Shuaibu Amodu"
    ],
    "answer": "Jo Bonfrere"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer played in four different FIFA World Cups?",
    "options": [
      "Jay-Jay Okocha",
      "Joseph Yobo",
      "Nwankwo Kanu",
      "Vincent Enyeama"
    ],
    "answer": "Joseph Yobo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian female sprinter competed in six World Championships?",
    "options": [
      "Mary Onyali",
      "Blessing Okagbare",
      "Glory Alozie",
      "Chioma Ajunwa"
    ],
    "answer": "Blessing Okagbare"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian won gold at the 2018 Commonwealth Games in table tennis?",
    "options": [
      "Quadri Aruna",
      "Segun Toriola",
      "Bode Abiodun",
      "Olajide Omotayo"
    ],
    "answer": "Quadri Aruna"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What year did Nigeria last reach the World Cup Round of 16?",
    "options": [
      "2010",
      "2014",
      "2018",
      "2002"
    ],
    "answer": "2014"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who scored the only goal for Nigeria in the 1998 World Cup win over Bulgaria?",
    "options": [
      "Garba Lawal",
      "Victor Ikpeba",
      "Sunday Oliseh",
      "Jay-Jay Okocha"
    ],
    "answer": "Victor Ikpeba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was the captain of Nigeria\u2019s U-17 team in 2015?",
    "options": [
      "Victor Osimhen",
      "Kelechi Nwakali",
      "Samuel Chukwueze",
      "Sani Emmanuel"
    ],
    "answer": "Kelechi Nwakali"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian high jumper competed in the 1984 and 1988 Olympics?",
    "options": [
      "Chinedu Odozor",
      "Anthony Idiata",
      "Benedict Majekodunmi",
      "Ajayi Agbebaku"
    ],
    "answer": "Chinedu Odozor"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Super Falcons coach led the team to the 1999 Women\u2019s World Cup quarterfinal?",
    "options": [
      "Ismaila Mabo",
      "Florence Omagbemi",
      "Edwin Okon",
      "Thomas Dennerby"
    ],
    "answer": "Ismaila Mabo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian club reached the semifinals of the 2004 CAF Champions League?",
    "options": [
      "Dolphins FC",
      "Kwara United",
      "Enugu Rangers",
      "Sunshine Stars"
    ],
    "answer": "Enugu Rangers"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was the first Nigerian female footballer to play in the US Women\u2019s League?",
    "options": [
      "Mercy Akide",
      "Perpetua Nkwocha",
      "Desire Oparanozie",
      "Ngozi Okobi"
    ],
    "answer": "Mercy Akide"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What event does Chukwuebuka Enekwechi specialise in?",
    "options": [
      "Javelin",
      "Shot Put",
      "Discus",
      "Hammer Throw"
    ],
    "answer": "Shot Put"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer was named in the CAF Team of the Year 2013?",
    "options": [
      "John Mikel Obi",
      "Victor Moses",
      "Ahmed Musa",
      "Vincent Enyeama"
    ],
    "answer": "John Mikel Obi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was the goalkeeper when Nigeria won AFCON 1980?",
    "options": [
      "Best Ogedegbe",
      "Peter Rufai",
      "Alloy Agu",
      "Emmanuel Okala"
    ],
    "answer": "Best Ogedegbe"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What was the scoreline when Nigeria beat Argentina in 2011 friendly match?",
    "options": [
      "3-1",
      "4-1",
      "2-0",
      "1-0"
    ],
    "answer": "4-1"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete was disqualified for switching nationality without IAAF approval?",
    "options": [
      "Francis Obikwelu",
      "Glory Alozie",
      "Olutoyin Augustus",
      "Chidi Imoh"
    ],
    "answer": "Glory Alozie"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was Nigeria\u2019s top scorer at the 2013 AFCON tournament?",
    "options": [
      "Victor Moses",
      "Sunday Mba",
      "Emmanuel Emenike",
      "Ahmed Musa"
    ],
    "answer": "Emmanuel Emenike"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete won gold in men\u2019s long jump at the 1982 Commonwealth Games?",
    "options": [
      "Ajayi Agbebaku",
      "Yusuf Alli",
      "Innocent Egbunike",
      "Emeka Udeaja"
    ],
    "answer": "Yusuf Alli"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer was the youngest scorer at the 2013 FIFA U-17 World Cup?",
    "options": [
      "Musa Yahaya",
      "Success Isaac",
      "Kelechi Nwakali",
      "Taiwo Awoniyi"
    ],
    "answer": "Success Isaac"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian player won the CAF African Inter-Club Player of the Year in 2004?",
    "options": [
      "Vincent Enyeama",
      "Obinna Nsofor",
      "Nwankwo Kanu",
      "Jay-Jay Okocha"
    ],
    "answer": "Vincent Enyeama"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian referee officiated at the 2008 Olympics?",
    "options": [
      "Henry Ogunyamodi",
      "Ferdinand Udoh",
      "Paul Bassey",
      "Wale Adeniran"
    ],
    "answer": "Henry Ogunyamodi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian basketballer was drafted into the NBA in 2020?",
    "options": [
      "Jordan Nwora",
      "Precious Achiuwa",
      "Al-Farouq Aminu",
      "Festus Ezeli"
    ],
    "answer": "Precious Achiuwa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What year did Nigeria win its first FIFA U-20 Women\u2019s World Cup match?",
    "options": [
      "2002",
      "2004",
      "2006",
      "2008"
    ],
    "answer": "2004"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete held the African record for 100m in 2006?",
    "options": [
      "Olapade Adeniken",
      "Uchenna Emedolu",
      "Deji Aliu",
      "Davidson Ezinwa"
    ],
    "answer": "Olusoji Fasuba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who was the youngest Nigerian player to feature at a FIFA World Cup?",
    "options": [
      "Femi Opabunmi",
      "Ahmed Musa",
      "Nwankwo Kanu",
      "Muda Lawal"
    ],
    "answer": "Femi Opabunmi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete has competed in both the Olympics and World Championships for wrestling?",
    "options": [
      "Blessing Oborududu",
      "Mercy Genesis",
      "Odunayo Adekuoroye",
      "Aminat Adeniyi"
    ],
    "answer": "Odunayo Adekuoroye"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What year did Nigeria last qualify for the Women\u2019s Olympic football tournament?",
    "options": [
      "2004",
      "2008",
      "2012",
      "2016"
    ],
    "answer": "2008"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer had a stint with Ajax and later became a coach?",
    "options": [
      "Sunday Oliseh",
      "Finidi George",
      "Daniel Amokachi",
      "Mutiu Adepoju"
    ],
    "answer": "Finidi George"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian judo athlete has won multiple African Games medals?",
    "options": [
      "Victoria Agbodobiri",
      "Enku Ekuta",
      "Joy Asonye",
      "Maryann Ugwumba"
    ],
    "answer": "Enku Ekuta"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian swimmer competed at the 2016 Rio Olympics?",
    "options": [
      "Joshua Ikhaghomi",
      "Abiola Ogunbanwo",
      "Rachael Tonjor",
      "David Ekundayo"
    ],
    "answer": "Rachael Tonjor"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Super Falcons player has the most appearances in FIFA Women\u2019s World Cup tournaments?",
    "options": [
      "Desire Oparanozie",
      "Asisat Oshoala",
      "Onome Ebi",
      "Perpetua Nkwocha"
    ],
    "answer": "Onome Ebi"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian sprinter once held the world indoor 60m record?",
    "options": [
      "Deji Aliu",
      "Olusoji Fasuba",
      "Davidson Ezinwa",
      "Francis Obikwelu"
    ],
    "answer": "Olusoji Fasuba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which city hosted Nigeria\u2019s National Sports Festival in 2006?",
    "options": [
      "Abuja",
      "Abeokuta",
      "Makurdi",
      "Calabar"
    ],
    "answer": "Abeokuta"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who scored Nigeria\u2019s first ever goal at the FIFA World Cup?",
    "options": [
      "Finidi George",
      "Daniel Amokachi",
      "Rashidi Yekini",
      "Mutiu Adepoju"
    ],
    "answer": "Rashidi Yekini"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian striker scored in both the 2010 and 2014 World Cups?",
    "options": [
      "Victor Moses",
      "Odion Ighalo",
      "Ahmed Musa",
      "Obafemi Martins"
    ],
    "answer": "Ahmed Musa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete once ranked World No. 1 in weightlifting?",
    "options": [
      "Blessing Okagbare",
      "Lucy Ejike",
      "Folashade Oluwafemiayo",
      "Esther Oyema"
    ],
    "answer": "Folashade Oluwafemiayo"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which state won the most medals at the 2022 National Sports Festival?",
    "options": [
      "Lagos",
      "Edo",
      "Delta",
      "Rivers"
    ],
    "answer": "Delta"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer scored in the UEFA Champions League for Ajax in the late 1990s?",
    "options": [
      "Finidi George",
      "Nwankwo Kanu",
      "Sunday Oliseh",
      "Tijani Babangida"
    ],
    "answer": "Finidi George"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete won silver in the 110m hurdles at the 2000 Olympics for Spain?",
    "options": [
      "Tobi Amusan",
      "Francis Obikwelu",
      "Glory Alozie",
      "Uchenna Emedolu"
    ],
    "answer": "Glory Alozie"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who coached the Super Falcons during their debut Women\u2019s World Cup appearance in 1991?",
    "options": [
      "Ismaila Mabo",
      "Uche Eucharia",
      "Godwin Izilien",
      "Paul Hamilton"
    ],
    "answer": "Paul Hamilton"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian table tennis player represented Africa at the 2014 ITTF World Cup?",
    "options": [
      "Quadri Aruna",
      "Olajide Omotayo",
      "Segun Toriola",
      "Bode Abiodun"
    ],
    "answer": "Quadri Aruna"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What medal did Nigeria win in men\u2019s 4x400m relay at Sydney 2000 (after USA\u2019s disqualification)?",
    "options": [
      "Gold",
      "Silver",
      "Bronze",
      "None"
    ],
    "answer": "Gold"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Who captained the Nigerian Dream Team II at the 2008 Olympics?",
    "options": [
      "Obinna Nsofor",
      "Peter Odemwingie",
      "Chinedu Obasi",
      "Sani Kaita"
    ],
    "answer": "Peter Odemwingie"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian sprinter ran a sub-10 second 100m in 2006?",
    "options": [
      "Olusoji Fasuba",
      "Davidson Ezinwa",
      "Deji Aliu",
      "Francis Obikwelu"
    ],
    "answer": "Olusoji Fasuba"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete was stripped of a medal after testing positive at the 2008 Paralympics?",
    "options": [
      "Folashade Oluwafemiayo",
      "Esther Oyema",
      "Lucy Ejike",
      "Victoria Nneji"
    ],
    "answer": "Esther Oyema"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian striker scored twice against Argentina in a U-23 friendly in 2016?",
    "options": [
      "Kelechi Iheanacho",
      "Imoh Ezekiel",
      "Sadiq Umar",
      "Junior Ajayi"
    ],
    "answer": "Imoh Ezekiel"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "What is the full name of Nigeria\u2019s first Olympic gold medallist?",
    "options": [
      "Chioma Chukwujindu Ajunwa",
      "Chioma Agatha Ajunwa",
      "Chioma Ajunwa-Opara",
      "Chioma Blessing Ajunwa"
    ],
    "answer": "Chioma Chukwujindu Ajunwa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian female footballer scored a hat trick in the 1999 Women\u2019s World Cup?",
    "options": [
      "Mercy Akide",
      "Perpetua Nkwocha",
      "Nkiru Okosieme",
      "Rita Nwadike"
    ],
    "answer": "Nkiru Okosieme"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian club was formerly known as Iwuanyanwu Nationale?",
    "options": [
      "Heartland FC",
      "Rangers International",
      "Shooting Stars",
      "Wikki Tourists"
    ],
    "answer": "Heartland FC"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian footballer once scored in four different AFCON tournaments?",
    "options": [
      "Victor Ikpeba",
      "Ahmed Musa",
      "Jay-Jay Okocha",
      "Nwankwo Kanu"
    ],
    "answer": "Ahmed Musa"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian sprinter was the first to qualify for the Olympics in 1980?",
    "options": [
      "Innocent Egbunike",
      "Chidi Imoh",
      "Adebayo Adekoya",
      "Hassan Bosso"
    ],
    "answer": "Chidi Imoh"
  },
  {
    "category": "Naija Sports",
    "difficulty": "Hard",
    "question": "Which Nigerian athlete competed in both wrestling and weightlifting at the African Games?",
    "options": [
      "Loveline Obiji",
      "Blessing Onyebuchi",
      "Maryann Ugwumba",
      "Blessing Oborududu"
    ],
    "answer": "Blessing Onyebuchi"
  }



































];

const clean = questions.filter(Boolean);   // drop any empty / undefined items
export default clean;

