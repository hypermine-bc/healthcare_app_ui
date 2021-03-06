const medList = [
  {
    'term': 'Ibuprofen',
    'count': 499
  },
  {
    'term': 'Oxygen',
    'count': 487
  },
  {
    'term': 'Gabapentin',
    'count': 270
  },
  {
    'term': 'Amoxicillin',
    'count': 207
  },
  {
    'term': 'OXYGEN',
    'count': 186
  },
  {
    'term': 'Hand Sanitizer',
    'count': 174
  },
  {
    'term': 'Salicylic Acid',
    'count': 166
  },
  {
    'term': 'Hydrochlorothiazide',
    'count': 156
  },
  {
    'term': 'Naproxen',
    'count': 154
  },
  {
    'term': 'Omeprazole',
    'count': 152
  },
  {
    'term': 'Metformin Hydrochloride',
    'count': 149
  },
  {
    'term': 'Atenolol',
    'count': 148
  },
  {
    'term': 'Cyclobenzaprine Hydrochloride',
    'count': 147
  },
  {
    'term': 'Levetiracetam',
    'count': 144
  },
  {
    'term': 'Lisinopril',
    'count': 144
  },
  {
    'term': 'Prednisone',
    'count': 142
  },
  {
    'term': 'Cephalexin',
    'count': 141
  },
  {
    'term': 'Metronidazole',
    'count': 140
  },
  {
    'term': 'Allergy Relief',
    'count': 138
  },
  {
    'term': 'Amoxicillin and Clavulanate Potassium',
    'count': 136
  },
  {
    'term': 'Naproxen Sodium',
    'count': 136
  },
  {
    'term': 'Doxycycline Hyclate',
    'count': 135
  },
  {
    'term': 'Levofloxacin',
    'count': 134
  },
  {
    'term': 'Losartan Potassium',
    'count': 133
  },
  {
    'term': 'Ranitidine',
    'count': 133
  },
  {
    'term': 'Lorazepam',
    'count': 132
  },
  {
    'term': 'Metoprolol Tartrate',
    'count': 132
  },
  {
    'term': 'Fluoxetine',
    'count': 131
  },
  {
    'term': 'Alprazolam',
    'count': 127
  },
  {
    'term': 'Furosemide',
    'count': 127
  },
  {
    'term': 'Ciprofloxacin',
    'count': 126
  },
  {
    'term': 'Bupropion Hydrochloride',
    'count': 124
  },
  {
    'term': 'Diclofenac Sodium',
    'count': 123
  },
  {
    'term': 'Methocarbamol',
    'count': 122
  },
  {
    'term': 'Glipizide',
    'count': 120
  },
  {
    'term': 'Ondansetron',
    'count': 119
  },
  {
    'term': 'Nitrogen',
    'count': 118
  },
  {
    'term': 'Famotidine',
    'count': 116
  },
  {
    'term': 'Acyclovir',
    'count': 115
  },
  {
    'term': 'Stool Softener',
    'count': 114
  },
  {
    'term': 'Aspirin',
    'count': 112
  },
  {
    'term': 'Carvedilol',
    'count': 112
  },
  {
    'term': 'Sulfamethoxazole and Trimethoprim',
    'count': 107
  },
  {
    'term': 'ATORVASTATIN CALCIUM',
    'count': 105
  },
  {
    'term': 'Phentermine Hydrochloride',
    'count': 105
  },
  {
    'term': 'Hydrocortisone',
    'count': 104
  },
  {
    'term': 'Potassium Chloride',
    'count': 103
  },
  {
    'term': 'Amlodipine Besylate',
    'count': 102
  },
  {
    'term': 'Cetirizine Hydrochloride',
    'count': 102
  },
  {
    'term': 'Pantoprazole Sodium',
    'count': 101
  },
  {
    'term': 'Azithromycin',
    'count': 100
  },
  {
    'term': 'Hydrocodone Bitartrate and Acetaminophen',
    'count': 100
  },
  {
    'term': 'Olanzapine',
    'count': 100
  },
  {
    'term': 'Topiramate',
    'count': 100
  },
  {
    'term': 'Acetaminophen',
    'count': 99
  },
  {
    'term': 'Diazepam',
    'count': 98
  },
  {
    'term': 'Lidocaine',
    'count': 98
  },
  {
    'term': 'Promethazine Hydrochloride',
    'count': 98
  },
  {
    'term': 'Mirtazapine',
    'count': 97
  },
  {
    'term': 'Paroxetine',
    'count': 97
  },
  {
    'term': 'Clonazepam',
    'count': 96
  },
  {
    'term': 'Propranolol Hydrochloride',
    'count': 92
  },
  {
    'term': 'Trazodone Hydrochloride',
    'count': 91
  },
  {
    'term': 'LISINOPRIL',
    'count': 90
  },
  {
    'term': 'Sertraline Hydrochloride',
    'count': 90
  },
  {
    'term': 'Levothyroxine Sodium',
    'count': 89
  },
  {
    'term': 'Fenofibrate',
    'count': 86
  },
  {
    'term': 'Lovastatin',
    'count': 86
  },
  {
    'term': 'Indomethacin',
    'count': 85
  },
  {
    'term': 'Atorvastatin Calcium',
    'count': 84
  },
  {
    'term': 'Ketorolac Tromethamine',
    'count': 84
  },
  {
    'term': 'Citalopram',
    'count': 83
  },
  {
    'term': 'Fluconazole',
    'count': 83
  },
  {
    'term': 'Warfarin Sodium',
    'count': 82
  },
  {
    'term': 'Allopurinol',
    'count': 81
  },
  {
    'term': 'Spironolactone',
    'count': 81
  },
  {
    'term': 'Diltiazem Hydrochloride',
    'count': 79
  },
  {
    'term': 'Lamotrigine',
    'count': 79
  },
  {
    'term': 'Nifedipine',
    'count': 79
  },
  {
    'term': 'GABAPENTIN',
    'count': 78
  },
  {
    'term': 'Triamcinolone Acetonide',
    'count': 77
  },
  {
    'term': 'Benazepril Hydrochloride',
    'count': 76
  },
  {
    'term': 'Etodolac',
    'count': 76
  },
  {
    'term': 'Divalproex Sodium',
    'count': 75
  },
  {
    'term': 'Glimepiride',
    'count': 74
  },
  {
    'term': 'Montelukast Sodium',
    'count': 74
  },
  {
    'term': 'Escitalopram',
    'count': 73
  },
  {
    'term': 'Loratadine',
    'count': 73
  },
  {
    'term': 'Penicillin V Potassium',
    'count': 73
  },
  {
    'term': 'Diphenhydramine Hydrochloride',
    'count': 71
  },
  {
    'term': 'Doxycycline',
    'count': 71
  },
  {
    'term': 'Amitriptyline Hydrochloride',
    'count': 70
  },
  {
    'term': 'Hydrogen Peroxide',
    'count': 70
  },
  {
    'term': 'Simvastatin',
    'count': 70
  },
  {
    'term': 'Venlafaxine Hydrochloride',
    'count': 70
  },
  {
    'term': 'Hydralazine Hydrochloride',
    'count': 69
  },
  {
    'term': 'Lidocaine Hydrochloride',
    'count': 69
  },
  {
    'term': 'Baclofen',
    'count': 68
  },
  {
    'term': 'Isopropyl Alcohol',
    'count': 68
  },
  {
    'term': 'Nortriptyline Hydrochloride',
    'count': 68
  },
  {
    'term': 'Nystatin',
    'count': 68
  },
  {
    'term': 'Gas Relief Extra Strength',
    'count': 67
  },
  {
    'term': 'Miconazole Nitrate',
    'count': 67
  },
  {
    'term': 'Celecoxib',
    'count': 66
  },
  {
    'term': 'Dicyclomine Hydrochloride',
    'count': 66
  },
  {
    'term': 'Oxycodone and Acetaminophen',
    'count': 66
  },
  {
    'term': 'Tolnaftate',
    'count': 66
  },
  {
    'term': 'Tramadol Hydrochloride',
    'count': 66
  },
  {
    'term': 'benzonatate',
    'count': 66
  },
  {
    'term': 'Fluticasone Propionate',
    'count': 65
  },
  {
    'term': 'Oxycodone Hydrochloride',
    'count': 65
  },
  {
    'term': 'Zolpidem Tartrate',
    'count': 65
  },
  {
    'term': 'Antiseptic',
    'count': 64
  },
  {
    'term': 'Cefdinir',
    'count': 64
  },
  {
    'term': 'ibuprofen',
    'count': 64
  },
  {
    'term': 'Clonidine Hydrochloride',
    'count': 63
  },
  {
    'term': 'Nabumetone',
    'count': 63
  },
  {
    'term': 'Carisoprodol',
    'count': 62
  },
  {
    'term': 'Hydroxyzine Hydrochloride',
    'count': 62
  },
  {
    'term': 'Losartan Potassium and Hydrochlorothiazide',
    'count': 62
  },
  {
    'term': 'Metaxalone',
    'count': 62
  },
  {
    'term': 'Risperidone',
    'count': 62
  },
  {
    'term': 'Clindamycin Hydrochloride',
    'count': 61
  },
  {
    'term': 'Clobetasol Propionate',
    'count': 61
  },
  {
    'term': 'Lithium Carbonate',
    'count': 61
  },
  {
    'term': 'Nicotine',
    'count': 61
  },
  {
    'term': 'Dandruff',
    'count': 60
  },
  {
    'term': 'Instant Hand Sanitizer',
    'count': 60
  },
  {
    'term': 'Lansoprazole',
    'count': 60
  },
  {
    'term': 'Buspirone Hydrochloride',
    'count': 59
  },
  {
    'term': 'Duloxetine',
    'count': 59
  },
  {
    'term': 'Headache Relief Extra Strength',
    'count': 59
  },
  {
    'term': 'Triamterene and Hydrochlorothiazide',
    'count': 59
  },
  {
    'term': 'Valsartan and Hydrochlorothiazide',
    'count': 59
  },
  {
    'term': 'citroma',
    'count': 59
  },
  {
    'term': 'Benzonatate',
    'count': 58
  },
  {
    'term': 'Minocycline Hydrochloride',
    'count': 58
  },
  {
    'term': 'Oxybutynin Chloride',
    'count': 58
  },
  {
    'term': 'Finasteride',
    'count': 57
  },
  {
    'term': 'Glyburide',
    'count': 57
  },
  {
    'term': 'Haloperidol',
    'count': 57
  },
  {
    'term': 'Sodium Chloride',
    'count': 57
  },
  {
    'term': 'Aripiprazole',
    'count': 56
  },
  {
    'term': 'Citalopram Hydrobromide',
    'count': 56
  },
  {
    'term': 'Lisinopril and Hydrochlorothiazide',
    'count': 56
  },
  {
    'term': 'Loperamide Hydrochloride',
    'count': 56
  },
  {
    'term': 'Morphine Sulfate',
    'count': 56
  },
  {
    'term': 'Tamsulosin Hydrochloride',
    'count': 56
  },
  {
    'term': 'METFORMIN HYDROCHLORIDE',
    'count': 55
  },
  {
    'term': 'Fluocinonide',
    'count': 54
  },
  {
    'term': 'Gemfibrozil',
    'count': 54
  },
  {
    'term': 'Metformin hydrochloride',
    'count': 54
  },
  {
    'term': 'Metoclopramide',
    'count': 54
  },
  {
    'term': 'Triple Antibiotic',
    'count': 54
  },
  {
    'term': 'Verapamil Hydrochloride',
    'count': 54
  },
  {
    'term': 'Quetiapine Fumarate',
    'count': 53
  },
  {
    'term': 'simvastatin',
    'count': 52
  },
  {
    'term': 'Anticavity',
    'count': 51
  },
  {
    'term': 'Antispetic',
    'count': 51
  },
  {
    'term': 'Ramipril',
    'count': 51
  },
  {
    'term': 'NITROGEN',
    'count': 50
  },
  {
    'term': 'Witch Hazel',
    'count': 50
  },
  {
    'term': 'AMITRIPTYLINE HYDROCHLORIDE',
    'count': 49
  },
  {
    'term': 'Clopidogrel',
    'count': 49
  },
  {
    'term': 'Clotrimazole',
    'count': 49
  },
  {
    'term': 'Estradiol',
    'count': 49
  },
  {
    'term': 'Sildenafil',
    'count': 49
  },
  {
    'term': 'Tizanidine',
    'count': 49
  },
  {
    'term': 'Doxazosin',
    'count': 48
  },
  {
    'term': 'Folic Acid',
    'count': 48
  },
  {
    'term': 'Heparin Sodium',
    'count': 48
  },
  {
    'term': 'Meclizine Hydrochloride',
    'count': 48
  },
  {
    'term': 'Tobramycin',
    'count': 48
  },
  {
    'term': 'Clarithromycin',
    'count': 47
  },
  {
    'term': 'Ondansetron Hydrochloride',
    'count': 47
  },
  {
    'term': 'HYDROCODONE BITARTRATE AND ACETAMINOPHEN',
    'count': 46
  },
  {
    'term': 'Rosuvastatin Calcium',
    'count': 46
  },
  {
    'term': 'Air',
    'count': 45
  },
  {
    'term': 'Epsom Salt',
    'count': 45
  },
  {
    'term': 'Meloxicam',
    'count': 45
  },
  {
    'term': 'Donepezil Hydrochloride',
    'count': 44
  },
  {
    'term': 'Metoprolol Succinate',
    'count': 44
  },
  {
    'term': 'Metoprolol succinate',
    'count': 44
  },
  {
    'term': 'Nitrous Oxide',
    'count': 44
  },
  {
    'term': 'PRAVASTATIN SODIUM',
    'count': 44
  },
  {
    'term': 'Phenazopyridine Hydrochloride',
    'count': 44
  },
  {
    'term': 'TRAMADOL HYDROCHLORIDE',
    'count': 44
  },
  {
    'term': 'Hand Wash',
    'count': 43
  },
  {
    'term': 'Pain Relief Extra Strength',
    'count': 43
  },
  {
    'term': 'ZOLPIDEM TARTRATE',
    'count': 43
  },
  {
    'term': 'ENALAPRIL MALEATE',
    'count': 42
  },
  {
    'term': 'Magnesium Citrate',
    'count': 42
  },
  {
    'term': 'acyclovir',
    'count': 42
  },
  {
    'term': 'meloxicam',
    'count': 42
  },
  {
    'term': 'Albuterol Sulfate',
    'count': 41
  },
  {
    'term': 'Digoxin',
    'count': 41
  },
  {
    'term': 'Pravastatin Sodium',
    'count': 41
  },
  {
    'term': 'Quetiapine fumarate',
    'count': 41
  },
  {
    'term': 'Acetaminophen and Codeine Phosphate',
    'count': 40
  },
  {
    'term': 'Benztropine Mesylate',
    'count': 40
  },
  {
    'term': 'Docusate Sodium',
    'count': 40
  },
  {
    'term': 'Lyrica',
    'count': 40
  },
  {
    'term': 'Advanced Hand Sanitizer',
    'count': 39
  },
  {
    'term': 'Alcohol Prep Pad',
    'count': 39
  },
  {
    'term': 'Diphenoxylate Hydrochloride and Atropine Sulfate',
    'count': 39
  },
  {
    'term': 'Enalapril Maleate',
    'count': 39
  },
  {
    'term': 'Isoniazid',
    'count': 39
  },
  {
    'term': 'Sleep Aid',
    'count': 39
  },
  {
    'term': 'Sunscreen',
    'count': 39
  },
  {
    'term': 'clonidine hydrochloride',
    'count': 39
  },
  {
    'term': 'Banana Boat',
    'count': 38
  },
  {
    'term': 'Cefadroxil',
    'count': 38
  },
  {
    'term': 'Ketoconazole',
    'count': 38
  },
  {
    'term': 'Ofloxacin',
    'count': 38
  },
  {
    'term': 'ciprofloxacin',
    'count': 38
  },
  {
    'term': 'Antiseptic Mouth Rinse',
    'count': 37
  },
  {
    'term': 'Betamethasone Dipropionate',
    'count': 37
  },
  {
    'term': 'Dexamethasone',
    'count': 37
  },
  {
    'term': 'Erythromycin',
    'count': 37
  },
  {
    'term': 'Glycopyrrolate',
    'count': 37
  },
  {
    'term': 'Hydrocodone Bitartrate And Acetaminophen',
    'count': 37
  },
  {
    'term': 'Hydroxyzine Pamoate',
    'count': 37
  },
  {
    'term': 'IBUPROFEN',
    'count': 37
  },
  {
    'term': 'Acid Reducer',
    'count': 36
  },
  {
    'term': 'Ampicillin',
    'count': 36
  },
  {
    'term': 'Bach Original Flower Remedies',
    'count': 36
  },
  {
    'term': 'Bacitracin',
    'count': 36
  },
  {
    'term': 'Calcium Acetate',
    'count': 36
  },
  {
    'term': 'Doxepin Hydrochloride',
    'count': 36
  },
  {
    'term': 'Eszopiclone',
    'count': 36
  },
  {
    'term': 'Nighttime Sleep Aid',
    'count': 36
  },
  {
    'term': 'anti bacterial hand sanitizer',
    'count': 36
  },
  {
    'term': 'Axe',
    'count': 35
  },
  {
    'term': 'Esomeprazole Magnesium',
    'count': 35
  },
  {
    'term': 'IBU',
    'count': 35
  },
  {
    'term': 'Valacyclovir Hydrochloride',
    'count': 35
  },
  {
    'term': 'ADSOL Red Cell Preservation Solution System in Plastic Container (PL 146 Plastic)',
    'count': 34
  },
  {
    'term': 'Antibacterial',
    'count': 34
  },
  {
    'term': 'Carbamazepine',
    'count': 34
  },
  {
    'term': 'Memantine Hydrochloride',
    'count': 34
  },
  {
    'term': 'Mineral Oil',
    'count': 34
  },
  {
    'term': 'Temazepam',
    'count': 34
  },
  {
    'term': 'Tramadol Hydrochloride and Acetaminophen',
    'count': 34
  },
  {
    'term': 'Valsartan',
    'count': 34
  },
  {
    'term': 'Allergy',
    'count': 33
  },
  {
    'term': 'Milk of Magnesia',
    'count': 33
  },
  {
    'term': 'Mometasone Furoate',
    'count': 33
  },
  {
    'term': 'All Day Pain Relief',
    'count': 32
  },
  {
    'term': 'Amlodipine and Benazepril Hydrochloride',
    'count': 32
  },
  {
    'term': 'Aspirin Low Dose',
    'count': 32
  },
  {
    'term': 'Dexamethasone Sodium Phosphate',
    'count': 32
  },
  {
    'term': 'Honey Lemon Cough Drop',
    'count': 32
  },
  {
    'term': 'Modafinil',
    'count': 32
  },
  {
    'term': 'Venlafaxine',
    'count': 32
  },
  {
    'term': 'cephalexin',
    'count': 32
  },
  {
    'term': 'lisinopril',
    'count': 32
  },
  {
    'term': 'Anticavity Fluoride Rinse',
    'count': 31
  },
  {
    'term': 'Carbon Dioxide',
    'count': 31
  },
  {
    'term': 'Childrens Allergy Relief',
    'count': 31
  },
  {
    'term': 'Childrens Ibuprofen',
    'count': 31
  },
  {
    'term': 'Hawaiian Tropic',
    'count': 31
  },
  {
    'term': 'Honey Lemon Cough Drops',
    'count': 31
  },
  {
    'term': 'Irbesartan',
    'count': 31
  },
  {
    'term': 'Pain Relief PM Extra Strength',
    'count': 31
  },
  {
    'term': 'Sertraline',
    'count': 31
  },
  {
    'term': 'Terbinafine Hydrochloride',
    'count': 31
  },
  {
    'term': 'AMLODIPINE BESYLATE',
    'count': 30
  },
  {
    'term': 'Anti-Diarrheal',
    'count': 30
  },
  {
    'term': 'Cefazolin',
    'count': 30
  },
  {
    'term': 'Childrens Allergy',
    'count': 30
  },
  {
    'term': 'Clindamycin hydrochloride',
    'count': 30
  },
  {
    'term': 'Fexofenadine Hydrochloride',
    'count': 30
  },
  {
    'term': 'Lamivudine',
    'count': 30
  },
  {
    'term': 'Orphenadrine Citrate',
    'count': 30
  },
  {
    'term': 'Pain Reliever Extra Strength',
    'count': 30
  },
  {
    'term': 'Perphenazine',
    'count': 30
  },
  {
    'term': 'Quetiapine',
    'count': 30
  },
  {
    'term': 'TOPIRAMATE',
    'count': 30
  },
  {
    'term': 'Tartar control plus',
    'count': 30
  },
  {
    'term': 'Antibacterial Hand Sanitizer',
    'count': 29
  },
  {
    'term': 'Bumetanide',
    'count': 29
  },
  {
    'term': 'ESZOPICLONE',
    'count': 29
  },
  {
    'term': 'Isosorbide Dinitrate',
    'count': 29
  },
  {
    'term': 'Methylphenidate Hydrochloride',
    'count': 29
  },
  {
    'term': 'ONDANSETRON',
    'count': 29
  },
  {
    'term': 'Petroleum',
    'count': 29
  },
  {
    'term': 'Acetaminophen Extra Strength',
    'count': 28
  },
  {
    'term': 'Desoximetasone',
    'count': 28
  },
  {
    'term': 'Gentamicin Sulfate',
    'count': 28
  },
  {
    'term': 'Labetalol Hydrochloride',
    'count': 28
  },
  {
    'term': 'Levothyroxine sodium',
    'count': 28
  },
  {
    'term': 'Medroxyprogesterone Acetate',
    'count': 28
  },
  {
    'term': 'Methotrexate',
    'count': 28
  },
  {
    'term': 'Mupirocin',
    'count': 28
  },
  {
    'term': 'Neomycin and Polymyxin B Sulfates and Hydrocortisone',
    'count': 28
  },
  {
    'term': 'Oxcarbazepine',
    'count': 28
  },
  {
    'term': 'PROMETHAZINE HYDROCHLORIDE',
    'count': 28
  },
  {
    'term': 'Phenobarbital',
    'count': 28
  },
  {
    'term': 'PredniSONE',
    'count': 28
  },
  {
    'term': 'Prochlorperazine Maleate',
    'count': 28
  },
  {
    'term': 'SERTRALINE HYDROCHLORIDE',
    'count': 28
  },
  {
    'term': 'Sodium Bicarbonate',
    'count': 28
  },
  {
    'term': 'Ursodiol',
    'count': 28
  },
  {
    'term': 'Vancomycin Hydrochloride',
    'count': 28
  },
  {
    'term': 'Budesonide',
    'count': 27
  },
  {
    'term': 'CPDA-1',
    'count': 27
  },
  {
    'term': 'Dextrose',
    'count': 27
  },
  {
    'term': 'HAND SANITIZER',
    'count': 27
  },
  {
    'term': 'Hydroxychloroquine Sulfate',
    'count': 27
  },
  {
    'term': 'Methylprednisolone',
    'count': 27
  },
  {
    'term': 'OXYCODONE HYDROCHLORIDE',
    'count': 27
  },
  {
    'term': 'Prazosin Hydrochloride',
    'count': 27
  },
  {
    'term': 'Sucralfate',
    'count': 27
  },
  {
    'term': 'honey lemon cough drops',
    'count': 27
  },
  {
    'term': 'instant hand sanitizer',
    'count': 27
  },
  {
    'term': 'Anastrozole',
    'count': 26
  },
  {
    'term': 'Cherry Cough Drop',
    'count': 26
  },
  {
    'term': 'Glipizide ER',
    'count': 26
  },
  {
    'term': 'Hyoscyamine Sulfate',
    'count': 26
  },
  {
    'term': 'Linezolid',
    'count': 26
  },
  {
    'term': 'Pain Relief',
    'count': 26
  },
  {
    'term': 'Piperacillin and Tazobactam',
    'count': 26
  },
  {
    'term': 'Tacrolimus',
    'count': 26
  },
  {
    'term': 'Zoledronic Acid',
    'count': 26
  },
  {
    'term': 'cherry cough drops',
    'count': 26
  },
  {
    'term': 'nicotine',
    'count': 26
  },
  {
    'term': 'BANANA BOAT',
    'count': 25
  },
  {
    'term': 'Calamine',
    'count': 25
  },
  {
    'term': 'Ergocalciferol',
    'count': 25
  },
  {
    'term': 'Megestrol Acetate',
    'count': 25
  },
  {
    'term': 'Motion Sickness Relief',
    'count': 25
  },
  {
    'term': 'Mucus Relief DM',
    'count': 25
  },
  {
    'term': 'Phendimetrazine Tartrate',
    'count': 25
  },
  {
    'term': 'Piroxicam',
    'count': 25
  },
  {
    'term': 'Stomach Relief',
    'count': 25
  },
  {
    'term': 'Sumatriptan Succinate',
    'count': 25
  },
  {
    'term': 'antacid',
    'count': 25
  },
  {
    'term': 'Amantadine Hydrochloride',
    'count': 24
  },
  {
    'term': 'Amiodarone Hydrochloride',
    'count': 24
  },
  {
    'term': 'Bacitracin Zinc',
    'count': 24
  },
  {
    'term': 'Body',
    'count': 24
  },
  {
    'term': 'Captopril',
    'count': 24
  },
  {
    'term': 'Chlordiazepoxide Hydrochloride',
    'count': 24
  },
  {
    'term': 'Chlorhexidine Gluconate',
    'count': 24
  },
  {
    'term': 'Cover Cream. Sun protection',
    'count': 24
  },
  {
    'term': 'Desmopressin Acetate',
    'count': 24
  },
  {
    'term': 'Epinephrine',
    'count': 24
  },
  {
    'term': 'Fluocinolone Acetonide',
    'count': 24
  },
  {
    'term': 'Naloxone Hydrochloride',
    'count': 24
  },
  {
    'term': 'Rizatriptan Benzoate',
    'count': 24
  },
  {
    'term': 'Stay Awake',
    'count': 24
  },
  {
    'term': 'Trihexyphenidyl Hydrochloride',
    'count': 24
  },
  {
    'term': 'ziprasidone hydrochloride',
    'count': 24
  },
  {
    'term': 'Alcohol',
    'count': 23
  },
  {
    'term': 'Betamethasone Valerate',
    'count': 23
  },
  {
    'term': 'Cherry Cough Drops',
    'count': 23
  },
  {
    'term': 'Chlorthalidone',
    'count': 23
  },
  {
    'term': 'Dove',
    'count': 23
  },
  {
    'term': 'Dutasteride',
    'count': 23
  },
  {
    'term': 'Ecolab',
    'count': 23
  },
  {
    'term': 'HYDROXYZINE PAMOATE',
    'count': 23
  },
  {
    'term': 'Hydromorphone Hydrochloride',
    'count': 23
  },
  {
    'term': 'Hydroxyzine hydrochloride',
    'count': 23
  },
  {
    'term': 'Ipratropium Bromide',
    'count': 23
  },
  {
    'term': 'LAMOTRIGINE',
    'count': 23
  },
  {
    'term': 'Laxative Pills Maximum Strength',
    'count': 23
  },
  {
    'term': 'Methimazole',
    'count': 23
  },
  {
    'term': 'PAROXETINE',
    'count': 23
  },
  {
    'term': 'Pain Reliever PM Extra Strength',
    'count': 23
  },
  {
    'term': 'Phenytoin Sodium',
    'count': 23
  },
  {
    'term': 'Rabeprazole Sodium',
    'count': 23
  },
  {
    'term': 'Rifampin',
    'count': 23
  },
  {
    'term': 'Zonisamide',
    'count': 23
  },
  {
    'term': 'allergy relief',
    'count': 23
  },
  {
    'term': 'escitalopram oxalate',
    'count': 23
  },
  {
    'term': 'isosorbide mononitrate',
    'count': 23
  },
  {
    'term': 'temazepam',
    'count': 23
  },
  {
    'term': 'ACETAMINOPHEN AND CODEINE PHOSPHATE',
    'count': 22
  },
  {
    'term': 'Antacid',
    'count': 22
  },
  {
    'term': 'Assured Instant',
    'count': 22
  },
  {
    'term': 'Athletes Foot',
    'count': 22
  },
  {
    'term': 'CARISOPRODOL',
    'count': 22
  },
  {
    'term': 'Clotrimazole and Betamethasone Dipropionate',
    'count': 22
  },
  {
    'term': 'Cyproheptadine Hydrochloride',
    'count': 22
  },
  {
    'term': 'Diclofenac sodium',
    'count': 22
  },
  {
    'term': 'Docetaxel',
    'count': 22
  },
  {
    'term': 'Glyburide and Metformin Hydrochloride',
    'count': 22
  },
  {
    'term': 'Levocetirizine Dihydrochloride',
    'count': 22
  },
  {
    'term': 'Mucus Relief',
    'count': 22
  },
  {
    'term': 'Nafcillin',
    'count': 22
  },
  {
    'term': 'Pramipexole Dihydrochloride',
    'count': 22
  },
  {
    'term': 'RISPERIDONE',
    'count': 22
  },
  {
    'term': 'Rosuvastatin calcium',
    'count': 22
  },
  {
    'term': 'STOOL SOFTENER',
    'count': 22
  },
  {
    'term': 'Sleep Aid Maximum Strength',
    'count': 22
  },
  {
    'term': 'Sotalol Hydrochloride',
    'count': 22
  },
  {
    'term': 'Stool Softener Plus Stimulant Laxative',
    'count': 22
  },
  {
    'term': 'Sumatriptan',
    'count': 22
  },
  {
    'term': 'Testosterone',
    'count': 22
  },
  {
    'term': 'Tranexamic Acid',
    'count': 22
  },
  {
    'term': 'verapamil hydrochloride',
    'count': 22
  },
  {
    'term': 'Adenosine',
    'count': 21
  },
  {
    'term': 'Alendronate Sodium',
    'count': 21
  },
  {
    'term': 'Buspirone HCl',
    'count': 21
  },
  {
    'term': 'Butalbital, Acetaminophen, and Caffeine',
    'count': 21
  },
  {
    'term': 'Ceftriaxone Sodium',
    'count': 21
  },
  {
    'term': 'Childrens Pain Relief',
    'count': 21
  },
  {
    'term': 'Ciclopirox',
    'count': 21
  },
  {
    'term': 'Cough and Cold HBP',
    'count': 21
  },
  {
    'term': 'Diaper Rash',
    'count': 21
  },
  {
    'term': 'Diclofenac Sodium Delayed Release',
    'count': 21
  },
  {
    'term': 'Ezetimibe',
    'count': 21
  },
  {
    'term': 'Fexofenadine hydrochloride',
    'count': 21
  },
  {
    'term': 'Gas Relief',
    'count': 21
  },
  {
    'term': 'Hemorrhoidal',
    'count': 21
  },
  {
    'term': 'Hydrogen Peroxide 3 Percent',
    'count': 21
  },
  {
    'term': 'Irbesartan and Hydrochlorothiazide',
    'count': 21
  },
  {
    'term': 'Lamivudine and Zidovudine',
    'count': 21
  },
  {
    'term': 'Magnesium Sulfate',
    'count': 21
  },
  {
    'term': 'Methadone Hydrochloride',
    'count': 21
  },
  {
    'term': 'Metoclopramide Hydrochloride',
    'count': 21
  },
  {
    'term': 'NAPROXEN',
    'count': 21
  },
  {
    'term': 'NITROUS OXIDE',
    'count': 21
  },
  {
    'term': 'Nadolol',
    'count': 21
  },
  {
    'term': 'Oxacillin',
    'count': 21
  },
  {
    'term': 'Pioglitazone Hydrochloride',
    'count': 21
  },
  {
    'term': 'Progesterone',
    'count': 21
  },
  {
    'term': 'Silver Sulfadiazine',
    'count': 21
  },
  {
    'term': 'Sore Throat',
    'count': 21
  },
  {
    'term': 'Sterile Water',
    'count': 21
  },
  {
    'term': 'Stool Softener Laxative',
    'count': 21
  },
  {
    'term': 'tizanidine',
    'count': 21
  },
  {
    'term': '70%',
    'count': 20
  },
  {
    'term': 'Acetaminophen PM Extra Strength',
    'count': 20
  },
  {
    'term': 'Alcohol Prep',
    'count': 20
  },
  {
    'term': 'Amlodipine Besylate and Benazepril Hydrochloride',
    'count': 20
  },
  {
    'term': 'Buspirone hydrochloride',
    'count': 20
  },
  {
    'term': 'Butalbital, Acetaminophen and Caffeine',
    'count': 20
  },
  {
    'term': 'CARBAMAZEPINE',
    'count': 20
  },
  {
    'term': 'CLONIDINE HYDROCHLORIDE',
    'count': 20
  },
  {
    'term': 'Calcitriol',
    'count': 20
  },
  {
    'term': 'Ceftriaxone',
    'count': 20
  },
  {
    'term': 'Cold Spot Point Relief',
    'count': 20
  },
  {
    'term': 'Felodipine',
    'count': 20
  },
  {
    'term': 'Fluorouracil',
    'count': 20
  },
  {
    'term': 'Helium',
    'count': 20
  },
  {
    'term': 'Imipramine Hydrochloride',
    'count': 20
  },
  {
    'term': 'Mycophenolate Mofetil',
    'count': 20
  },
  {
    'term': 'Neomycin and Polymyxin B Sulfates and Dexamethasone',
    'count': 20
  },
  {
    'term': 'Nitrofurantoin Monohydrate/ Macrocrystalline',
    'count': 20
  },
  {
    'term': 'Primidone',
    'count': 20
  },
  {
    'term': 'Salicylic acid',
    'count': 20
  },
  {
    'term': 'Triamcinolone acetonide',
    'count': 20
  },
  {
    'term': 'Undecylenic Acid',
    'count': 20
  },
  {
    'term': 'Ziprasidone Hydrochloride',
    'count': 20
  },
  {
    'term': 'omeprazole',
    'count': 20
  },
  {
    'term': 'ACYCLOVIR',
    'count': 19
  },
  {
    'term': 'AMOXICILLIN AND CLAVULANATE POTASSIUM',
    'count': 19
  },
  {
    'term': 'ANTIBACTERIAL FOAMING',
    'count': 19
  },
  {
    'term': 'Acetazolamide',
    'count': 19
  },
  {
    'term': 'Antiseptic Skin Cleanser',
    'count': 19
  },
  {
    'term': 'Atropine Sulfate',
    'count': 19
  },
  {
    'term': 'BENZTROPINE MESYLATE',
    'count': 19
  },
  {
    'term': 'CELEBREX',
    'count': 19
  },
  {
    'term': 'Capecitabine',
    'count': 19
  },
  {
    'term': 'Extra Strength Pain Relief',
    'count': 19
  },
  {
    'term': 'Fluoxetine Hydrochloride',
    'count': 19
  },
  {
    'term': 'Hand wash',
    'count': 19
  },
  {
    'term': 'Headache',
    'count': 19
  },
  {
    'term': 'Ketoprofen',
    'count': 19
  },
  {
    'term': 'Liothyronine Sodium',
    'count': 19
  },
  {
    'term': 'Moisturizing Antibacterial',
    'count': 19
  },
  {
    'term': 'Nitrofurantoin (monohydrate/macrocrystals)',
    'count': 19
  },
  {
    'term': 'Oxaliplatin',
    'count': 19
  },
  {
    'term': 'Prednisolone Sodium Phosphate',
    'count': 19
  },
  {
    'term': 'Senna S',
    'count': 19
  },
  {
    'term': 'azithromycin',
    'count': 19
  },
  {
    'term': 'azithromycin monohydrate',
    'count': 19
  },
  {
    'term': 'donepezil hydrochloride',
    'count': 19
  },
  {
    'term': 'lansoprazole',
    'count': 19
  },
  {
    'term': 'menthol cough drops',
    'count': 19
  },
  {
    'term': 'risperidone',
    'count': 19
  },
  {
    'term': 'AMOXICILLIN',
    'count': 18
  },
  {
    'term': 'ANTI BACTERIAL HAND SANITIZER',
    'count': 18
  },
  {
    'term': 'Ammonia N 13',
    'count': 18
  },
  {
    'term': 'Bupropion Hydrochloride SR',
    'count': 18
  },
  {
    'term': 'Childrens Acetaminophen',
    'count': 18
  },
  {
    'term': 'Childrens Loratadine Sugar Free',
    'count': 18
  },
  {
    'term': 'Childrens Pain and Fever',
    'count': 18
  },
  {
    'term': 'Cough DM',
    'count': 18
  },
  {
    'term': 'Diclofenac Potassium',
    'count': 18
  },
  {
    'term': 'Entacapone',
    'count': 18
  },
  {
    'term': 'Everyday Clean Dandruff',
    'count': 18
  },
  {
    'term': 'Flecainide Acetate',
    'count': 18
  },
  {
    'term': 'HYDROCORTISONE',
    'count': 18
  },
  {
    'term': 'INDOMETHACIN',
    'count': 18
  },
  {
    'term': 'Ibuprofen PM',
    'count': 18
  },
  {
    'term': 'Kids Relief',
    'count': 18
  },
  {
    'term': 'Lactulose',
    'count': 18
  },
  {
    'term': 'Laxative',
    'count': 18
  },
  {
    'term': 'Loratadine and Pseudoephedrine Sulfate',
    'count': 18
  },
  {
    'term': 'MECLIZINE HYDROCHLORIDE',
    'count': 18
  },
  {
    'term': 'Miconazole 7',
    'count': 18
  },
  {
    'term': 'Midazolam',
    'count': 18
  },
  {
    'term': 'Midazolam Hydrochloride',
    'count': 18
  },
  {
    'term': 'Nystatin and Triamcinolone Acetonide',
    'count': 18
  },
  {
    'term': 'Olmesartan Medoxomil',
    'count': 18
  },
  {
    'term': 'Omeprazole Magnesium',
    'count': 18
  },
  {
    'term': 'Oxaprozin',
    'count': 18
  },
  {
    'term': 'Pain Relief PM',
    'count': 18
  },
  {
    'term': 'Sodium Fluoride F 18',
    'count': 18
  },
  {
    'term': 'SudoGest',
    'count': 18
  },
  {
    'term': 'Tamoxifen Citrate',
    'count': 18
  },
  {
    'term': 'Torsemide',
    'count': 18
  },
  {
    'term': 'Valacyclovir',
    'count': 18
  },
  {
    'term': 'Valproic Acid',
    'count': 18
  },
  {
    'term': 'aspirin',
    'count': 18
  },
  {
    'term': 'triamcinolone acetonide',
    'count': 18
  },
  {
    'term': 'All Day Allergy',
    'count': 17
  },
  {
    'term': 'Anti-Bacterial Hand Gel',
    'count': 17
  },
  {
    'term': 'Aspirin Low Dose Safety Coated',
    'count': 17
  },
  {
    'term': 'Australian Gold Broad Spectrum SPF 30',
    'count': 17
  },
  {
    'term': 'Benzethonium chloride Plus Dyclonine hydrochloride',
    'count': 17
  },
  {
    'term': 'CYCLOBENZAPRINE HYDROCHLORIDE',
    'count': 17
  },
  {
    'term': 'Carbidopa and Levodopa',
    'count': 17
  },
  {
    'term': 'Cefuroxime Axetil',
    'count': 17
  },
  {
    'term': 'Donnatal',
    'count': 17
  },
  {
    'term': 'Escitalopram Oxalate',
    'count': 17
  },
  {
    'term': 'FENOFIBRATE',
    'count': 17
  },
  {
    'term': 'First Aid Antiseptic',
    'count': 17
  },
  {
    'term': 'Glycerin',
    'count': 17
  },
  {
    'term': 'Hand Sanitizer with Aloe',
    'count': 17
  },
  {
    'term': 'Ibuprofen and Pseudoephedrine Hydrochloride',
    'count': 17
  },
  {
    'term': 'Isosorbide Mononitrate',
    'count': 17
  },
  {
    'term': 'Loratadine ODT',
    'count': 17
  },
  {
    'term': 'Menthol Cough Drop',
    'count': 17
  },
  {
    'term': 'Menthol Cough Drops',
    'count': 17
  },
  {
    'term': 'Motion Sickness',
    'count': 17
  },
  {
    'term': 'Nasal Decongestant',
    'count': 17
  },
  {
    'term': 'Nicotine Polacrilex',
    'count': 17
  },
  {
    'term': 'PANTOPRAZOLE SODIUM',
    'count': 17
  },
  {
    'term': 'Paricalcitol',
    'count': 17
  },
  {
    'term': 'Quinapril',
    'count': 17
  },
  {
    'term': 'RANITIDINE',
    'count': 17
  },
  {
    'term': 'Simethicone',
    'count': 17
  },
  {
    'term': 'Stomach Relief Regular Strength',
    'count': 17
  },
  {
    'term': 'Tolterodine Tartrate',
    'count': 17
  },
  {
    'term': 'Waterless Anti-Bacterial Hand Cleanser',
    'count': 17
  },
  {
    'term': 'aripiprazole',
    'count': 17
  },
  {
    'term': 'hydroxyzine pamoate',
    'count': 17
  },
  {
    'term': 'ondansetron',
    'count': 17
  },
  {
    'term': 'oxygen',
    'count': 17
  },
  {
    'term': 'venlafaxine hydrochloride',
    'count': 17
  },
  {
    'term': 'ACETAMINOPHEN',
    'count': 16
  },
  {
    'term': 'Ampicillin and Sulbactam',
    'count': 16
  },
  {
    'term': 'Blueberry Scented Hand Sanitizer',
    'count': 16
  },
  {
    'term': 'Bupropion Hydrochloride (XL)',
    'count': 16
  },
  {
    'term': 'Cilostazol',
    'count': 16
  },
  {
    'term': 'Cimetidine',
    'count': 16
  },
  {
    'term': 'Clindamycin Phosphate',
    'count': 16
  },
  {
    'term': 'Cold and Flu Nighttime',
    'count': 16
  },
  {
    'term': 'DIPHENHYDRAMINE HYDROCHLORIDE',
    'count': 16
  },
  {
    'term': 'Daily Moisturizing',
    'count': 16
  },
  {
    'term': 'Desipramine Hydrochloride',
    'count': 16
  },
  {
    'term': 'Desvenlafaxine',
    'count': 16
  },
  {
    'term': 'Dicloxacillin Sodium',
    'count': 16
  },
  {
    'term': 'Fosinopril Sodium',
    'count': 16
  },
  {
    'term': 'Gentle Laxative',
    'count': 16
  },
  {
    'term': 'Isopropyl Rubbing Alcohol',
    'count': 16
  },
  {
    'term': 'Low Dose Aspirin',
    'count': 16
  },
  {
    'term': 'MILK OF MAGNESIA',
    'count': 16
  },
  {
    'term': 'MS APF',
    'count': 16
  },
  {
    'term': 'Mucus Relief Severe Congestion and Cough Maximum Strength',
    'count': 16
  },
  {
    'term': 'Nitroglycerin',
    'count': 16
  },
  {
    'term': 'Oil Free Acne Wash',
    'count': 16
  },
  {
    'term': 'Olopatadine Hydrochloride',
    'count': 16
  },
  {
    'term': 'Oxytocin',
    'count': 16
  },
  {
    'term': 'PROCHLORPERAZINE MALEATE',
    'count': 16
  },
  {
    'term': 'Primo APF',
    'count': 16
  },
  {
    'term': 'Raloxifene Hydrochloride',
    'count': 16
  },
  {
    'term': 'Regular Strength Pain Relief',
    'count': 16
  },
  {
    'term': 'SILICEA',
    'count': 16
  },
  {
    'term': 'Sevelamer Carbonate',
    'count': 16
  },
  {
    'term': 'Sulindac',
    'count': 16
  },
  {
    'term': 'Terazosin',
    'count': 16
  },
  {
    'term': 'Tetracycline Hydrochloride',
    'count': 16
  },
  {
    'term': 'Top Quality Mfg APF',
    'count': 16
  },
  {
    'term': 'Tretinoin',
    'count': 16
  },
  {
    'term': 'VENTOLIN HFA',
    'count': 16
  },
  {
    'term': 'Viagra',
    'count': 16
  },
  {
    'term': 'Voriconazole',
    'count': 16
  },
  {
    'term': 'Zidovudine',
    'count': 16
  },
  {
    'term': 'Zolmitriptan',
    'count': 16
  },
  {
    'term': 'fexofenadine hydrochloride',
    'count': 16
  },
  {
    'term': 'Acetaminophen And Codeine',
    'count': 15
  },
  {
    'term': 'Acetaminophen and Codeine',
    'count': 15
  },
  {
    'term': 'Bupropion hydrochloride',
    'count': 15
  },
  {
    'term': 'Chest Rub',
    'count': 15
  },
  {
    'term': 'Childrens Loratadine',
    'count': 15
  },
  {
    'term': 'Chlorzoxazone',
    'count': 15
  },
  {
    'term': 'Ciprofloxacin Hydrochloride',
    'count': 15
  },
  {
    'term': 'Clopidogrel Bisulfate',
    'count': 15
  },
  {
    'term': 'Cromolyn Sodium',
    'count': 15
  },
  {
    'term': 'DOXYCYCLINE',
    'count': 15
  },
  {
    'term': 'Diphenhydramine HCL',
    'count': 15
  },
  {
    'term': 'Duloxetine Hydrochloride',
    'count': 15
  },
  {
    'term': 'Eye Wash',
    'count': 15
  },
  {
    'term': 'FLUOXETINE',
    'count': 15
  },
  {
    'term': 'FOLIC ACID',
    'count': 15
  },
  {
    'term': 'Famciclovir',
    'count': 15
  },
  {
    'term': 'Fentanyl',
    'count': 15
  },
  {
    'term': 'Fludeoxyglucose F 18',
    'count': 15
  },
  {
    'term': 'Fluphenazine Hydrochloride',
    'count': 15
  },
  {
    'term': 'Ibuprofen Childrens',
    'count': 15
  },
  {
    'term': 'Indapamide',
    'count': 15
  },
  {
    'term': 'Irinotecan Hydrochloride',
    'count': 15
  },
  {
    'term': 'LEVETIRACETAM',
    'count': 15
  },
  {
    'term': 'Lidocaine and Prilocaine',
    'count': 15
  },
  {
    'term': 'Lisinopril with Hydrochlorothiazide',
    'count': 15
  },
  {
    'term': 'Loratadine antihistamine',
    'count': 15
  },
  {
    'term': 'Losortan Potassium',
    'count': 15
  },
  {
    'term': 'Medicated Apricot Scrub',
    'count': 15
  },
  {
    'term': 'Menstrual Relief Maximum Strength',
    'count': 15
  },
  {
    'term': 'Nasal',
    'count': 15
  },
  {
    'term': 'Nicardipine Hydrochloride',
    'count': 15
  },
  {
    'term': 'Nitrofurantion Macrocrystals',
    'count': 15
  },
  {
    'term': 'Nizatidine',
    'count': 15
  },
  {
    'term': 'Petroleum Skin Protectant',
    'count': 15
  },
  {
    'term': 'Pioglitazone',
    'count': 15
  },
  {
    'term': 'Povidone Iodine',
    'count': 15
  },
  {
    'term': 'Pravastatin sodium',
    'count': 15
  },
  {
    'term': 'Senna',
    'count': 15
  },
  {
    'term': 'Sleep Aid Nighttime',
    'count': 15
  },
  {
    'term': 'Sore Throat Cherry',
    'count': 15
  },
  {
    'term': 'Stomach Relief Maximum Strength',
    'count': 15
  },
  {
    'term': 'Sulfacetamide Sodium',
    'count': 15
  },
  {
    'term': 'TOPROL XL',
    'count': 15
  },
  {
    'term': 'Terbutaline Sulfate',
    'count': 15
  },
  {
    'term': 'Valacyclovir hydrochloride',
    'count': 15
  },
  {
    'term': 'Xylocaine',
    'count': 15
  },
  {
    'term': 'anti-bacterial hand gel',
    'count': 15
  },
  {
    'term': 'hydrochlorothiazide',
    'count': 15
  },
  {
    'term': 'pravastatin sodium',
    'count': 15
  },
  {
    'term': 'tramadol hydrochloride',
    'count': 15
  },
  {
    'term': 'APIS MELLIFICA',
    'count': 14
  },
  {
    'term': 'ARNICA MONTANA',
    'count': 14
  },
  {
    'term': 'ASPIRIN',
    'count': 14
  },
  {
    'term': 'AZITHROMYCIN',
    'count': 14
  },
  {
    'term': 'Allergy Multi-Symptom',
    'count': 14
  },
  {
    'term': 'Antibacterial Wet Wipes',
    'count': 14
  },
  {
    'term': 'Argatroban',
    'count': 14
  },
  {
    'term': 'Azathioprine',
    'count': 14
  },
  {
    'term': 'Bethanechol Chloride',
    'count': 14
  },
  {
    'term': 'Buprenorphine',
    'count': 14
  },
  {
    'term': 'Burkhart',
    'count': 14
  },
  {
    'term': 'CIPROFLOXACIN',
    'count': 14
  },
  {
    'term': 'CRESTOR',
    'count': 14
  },
  {
    'term': 'Cefoxitin',
    'count': 14
  },
  {
    'term': 'Cefprozil',
    'count': 14
  },
  {
    'term': 'Clindamycin',
    'count': 14
  },
  {
    'term': 'Clopidogrel bisulfate',
    'count': 14
  },
  {
    'term': 'Cymbalta',
    'count': 14
  },
  {
    'term': 'DICLOFENAC SODIUM',
    'count': 14
  },
  {
    'term': 'Doxorubicin Hydrochloride',
    'count': 14
  },
  {
    'term': 'FIDELIS APF',
    'count': 14
  },
  {
    'term': 'Felbamate',
    'count': 14
  },
  {
    'term': 'Flumazenil',
    'count': 14
  },
  {
    'term': 'INSTANT HAND SANITIZER',
    'count': 14
  },
  {
    'term': 'Isopropyl alcohol 70 percent',
    'count': 14
  },
  {
    'term': 'Loratadine Allergy Relief',
    'count': 14
  },
  {
    'term': 'Loxapine',
    'count': 14
  },
  {
    'term': 'METRONIDAZOLE',
    'count': 14
  },
  {
    'term': 'Menthol cough drop',
    'count': 14
  },
  {
    'term': 'Minoxidil',
    'count': 14
  },
  {
    'term': 'Mucinex',
    'count': 14
  },
  {
    'term': 'PHENYTOIN SODIUM',
    'count': 14
  },
  {
    'term': 'Phenytoin',
    'count': 14
  },
  {
    'term': 'Promethazine with Codeine',
    'count': 14
  },
  {
    'term': 'Ribavirin',
    'count': 14
  },
  {
    'term': 'Rivastigmine Tartrate',
    'count': 14
  },
  {
    'term': 'SENNA',
    'count': 14
  },
  {
    'term': 'SIMVASTATIN',
    'count': 14
  },
  {
    'term': 'SODIUM CHLORIDE',
    'count': 14
  },
  {
    'term': 'SULPHUR',
    'count': 14
  },
  {
    'term': 'Salsalate',
    'count': 14
  },
  {
    'term': 'Silicea',
    'count': 14
  },
  {
    'term': 'Telmisartan',
    'count': 14
  },
  {
    'term': 'Theophylline',
    'count': 14
  },
  {
    'term': 'Tolnafate',
    'count': 14
  },
  {
    'term': 'VENLAFAXINE HYDROCHLORIDE',
    'count': 14
  },
  {
    'term': 'VERAPAMIL HYDROCHLORIDE',
    'count': 14
  },
  {
    'term': 'Vitamin A D',
    'count': 14
  },
  {
    'term': 'Womens Laxative',
    'count': 14
  },
  {
    'term': 'loperamide hydrochloride',
    'count': 14
  },
  {
    'term': 'topiramate',
    'count': 14
  },
  {
    'term': 'venlafaxine',
    'count': 14
  },
  {
    'term': 'Alcohol-Free Anticavity',
    'count': 13
  },
  {
    'term': 'Arnica Plus',
    'count': 13
  },
  {
    'term': 'Azelastine Hydrochloride',
    'count': 13
  },
  {
    'term': 'Azithromycin Dihydrate',
    'count': 13
  },
  {
    'term': 'Banophen',
    'count': 13
  },
  {
    'term': 'CELECOXIB',
    'count': 13
  },
  {
    'term': 'ChloraPrep One-Step',
    'count': 13
  },
  {
    'term': 'Chlorpromazine Hydrochloride',
    'count': 13
  },
  {
    'term': 'Clorazepate Dipotassium',
    'count': 13
  },
  {
    'term': 'DIGOXIN',
    'count': 13
  },
  {
    'term': 'Desonide',
    'count': 13
  },
  {
    'term': 'Diltiazem Hydrochloride Extended-Release',
    'count': 13
  },
  {
    'term': 'Dry Scalp Care',
    'count': 13
  },
  {
    'term': 'Entecavir',
    'count': 13
  },
  {
    'term': 'FERROUS SULFATE',
    'count': 13
  },
  {
    'term': 'Fexofenadine HCl',
    'count': 13
  },
  {
    'term': 'Fludeoxyglucose F18',
    'count': 13
  },
  {
    'term': 'Galantamine',
    'count': 13
  },
  {
    'term': 'Glipizide and Metformin Hydrochloride',
    'count': 13
  },
  {
    'term': 'Guanfacine',
    'count': 13
  },
  {
    'term': 'LORATADINE',
    'count': 13
  },
  {
    'term': 'Laxative Maximum Strength',
    'count': 13
  },
  {
    'term': 'MELOXICAM',
    'count': 13
  },
  {
    'term': 'Minocycline hydrochloride',
    'count': 13
  },
  {
    'term': 'Misoprostol',
    'count': 13
  },
  {
    'term': 'Moxifloxacin',
    'count': 13
  },
  {
    'term': 'Moxifloxacin Hydrochloride',
    'count': 13
  },
  {
    'term': 'Nevirapine',
    'count': 13
  },
  {
    'term': 'No7 Stay Perfect Foundation Sunscreen Broad Spectrum SPF 15 Deeply Beige',
    'count': 13
  },
  {
    'term': 'OXYBUTYNIN CHLORIDE',
    'count': 13
  },
  {
    'term': 'Olmesartan Medoxomil and Hydrochlorothiazide',
    'count': 13
  },
  {
    'term': 'Oseltamivir Phosphate',
    'count': 13
  },
  {
    'term': 'Oxybutynin Chloride Extended Release',
    'count': 13
  },
  {
    'term': 'Paclitaxel',
    'count': 13
  },
  {
    'term': 'Pain Relief Regular Strength',
    'count': 13
  },
  {
    'term': 'Pepto-Bismol',
    'count': 13
  },
  {
    'term': 'Permethrin',
    'count': 13
  },
  {
    'term': 'Polyethylene Glycol 3350',
    'count': 13
  },
  {
    'term': 'Pseudoephedrine Hydrochloride',
    'count': 13
  },
  {
    'term': 'Saline Laxative',
    'count': 13
  },
  {
    'term': 'Sodium Polystyrene Sulfonate',
    'count': 13
  },
  {
    'term': 'Sulfasalazine',
    'count': 13
  },
  {
    'term': 'Terconazole',
    'count': 13
  },
  {
    'term': 'Therapeutic',
    'count': 13
  },
  {
    'term': 'Timolol Maleate',
    'count': 13
  },
  {
    'term': 'Wet Wipes',
    'count': 13
  },
  {
    'term': 'levocetirizine dihydrochloride',
    'count': 13
  },
  {
    'term': 'levofloxacin',
    'count': 13
  },
  {
    'term': 'pain relief',
    'count': 13
  },
  {
    'term': '2 in 1 Dandruff',
    'count': 12
  },
  {
    'term': 'ABILIFY',
    'count': 12
  },
  {
    'term': 'All Day Allergy Relief',
    'count': 12
  },
  {
    'term': 'Allergy Relief Antihistamine',
    'count': 12
  },
  {
    'term': 'Antibacterial Hand',
    'count': 12
  },
  {
    'term': 'Anticavity Rinse',
    'count': 12
  },
  {
    'term': 'Artificial Tears',
    'count': 12
  },
  {
    'term': 'Australian Gold Broad Spectrum SPF 15',
    'count': 12
  },
  {
    'term': 'BENZONATATE',
    'count': 12
  },
  {
    'term': 'Bicalutamide',
    'count': 12
  },
  {
    'term': 'Bisacodyl',
    'count': 12
  },
  {
    'term': 'Buprenorphine and Naloxone',
    'count': 12
  },
  {
    'term': 'CETIRIZINE HYDROCHLORIDE',
    'count': 12
  },
  {
    'term': 'CYPROHEPTADINE HYDROCHLORIDE',
    'count': 12
  },
  {
    'term': 'Clozapine',
    'count': 12
  },
  {
    'term': 'DOCUSATE SODIUM',
    'count': 12
  },
  {
    'term': 'DULOXETINE DELAYED-RELEASE',
    'count': 12
  },
  {
    'term': 'Dapsone',
    'count': 12
  },
  {
    'term': 'Demeclocycline Hydrochloride',
    'count': 12
  },
  {
    'term': 'Dial Antibacterial Bar',
    'count': 12
  },
  {
    'term': 'Esmolol Hydrochloride',
    'count': 12
  },
  {
    'term': 'Extended Phenytoin Sodium',
    'count': 12
  },
  {
    'term': 'FUROSEMIDE',
    'count': 12
  },
  {
    'term': 'Gelato APF',
    'count': 12
  },
  {
    'term': 'Granisetron Hydrochloride',
    'count': 12
  },
  {
    'term': 'Hydrocortisone Maximum Strength',
    'count': 12
  },
  {
    'term': 'Isopropyl alcohol 91 percent',
    'count': 12
  },
  {
    'term': 'Itch Relief',
    'count': 12
  },
  {
    'term': 'LISINOPRIL AND HYDROCHLOROTHIAZIDE',
    'count': 12
  },
  {
    'term': 'Labetalol hydrochloride',
    'count': 12
  },
  {
    'term': 'Leucovorin Calcium',
    'count': 12
  },
  {
    'term': 'Loratadine and Pseudoephedrine',
    'count': 12
  },
  {
    'term': 'Losartan potassium',
    'count': 12
  },
  {
    'term': 'Meclizine HCl',
    'count': 12
  },
  {
    'term': 'Mesalamine',
    'count': 12
  },
  {
    'term': 'Metformin HCl',
    'count': 12
  },
  {
    'term': 'Muscle Ice',
    'count': 12
  },
  {
    'term': 'NAPROXEN SODIUM',
    'count': 12
  },
  {
    'term': 'Nitrofurantoin Macrocrystals',
    'count': 12
  },
  {
    'term': 'OXYCODONE AND ACETAMINOPHEN',
    'count': 12
  },
  {
    'term': 'Pain and Fever Childrens',
    'count': 12
  },
  {
    'term': 'Polymyxin B Sulfate and Trimethoprim',
    'count': 12
  },
  {
    'term': 'Propafenone Hydrochloride',
    'count': 12
  },
  {
    'term': 'Pyrimethamine Leucovorin',
    'count': 12
  },
  {
    'term': 'Ranitidine Hydrochloride',
    'count': 12
  },
  {
    'term': 'Ropinirole Hydrochloride',
    'count': 12
  },
  {
    'term': 'SF Honey Lemon Cough Drop',
    'count': 12
  },
  {
    'term': 'Severe Cold and Flu',
    'count': 12
  },
  {
    'term': 'Sugar Free Menthol Cough Drops',
    'count': 12
  },
  {
    'term': 'Terazosin Hydrochloride',
    'count': 12
  },
  {
    'term': 'Triamterene hydrochlorothiazide',
    'count': 12
  },
  {
    'term': 'Up and Up Nicotine',
    'count': 12
  },
  {
    'term': 'allergy',
    'count': 12
  },
  {
    'term': 'anti diarrheal',
    'count': 12
  },
  {
    'term': 'anti-bacterial hand sanitizer',
    'count': 12
  },
  {
    'term': 'fenofibrate',
    'count': 12
  },
  {
    'term': 'hemorrhoidal',
    'count': 12
  },
  {
    'term': 'indomethacin',
    'count': 12
  },
  {
    'term': 'oxycodone hydrochloride',
    'count': 12
  },
  {
    'term': 'tizanidine hydrochloride',
    'count': 12
  },
  {
    'term': 'voriconazole',
    'count': 12
  },
  {
    'term': 'ANTIBACTERIAL',
    'count': 11
  },
  {
    'term': 'Abacavir',
    'count': 11
  },
  {
    'term': 'Acne',
    'count': 11
  },
  {
    'term': 'Anti-Itch',
    'count': 11
  },
  {
    'term': 'Antibacterial Hand Wash',
    'count': 11
  },
  {
    'term': 'Armodafinil',
    'count': 11
  },
  {
    'term': 'Atenolol and Chlorthalidone',
    'count': 11
  },
  {
    'term': 'Atracurium Besylate',
    'count': 11
  },
  {
    'term': 'Azacitidine',
    'count': 11
  },
  {
    'term': 'CAPTOPRIL',
    'count': 11
  },
  {
    'term': 'CEFTRIAXONE',
    'count': 11
  },
  {
    'term': 'Calcium Chloride',
    'count': 11
  },
  {
    'term': 'Carboplatin',
    'count': 11
  },
  {
    'term': 'Cetirizine',
    'count': 11
  },
  {
    'term': 'Citroma',
    'count': 11
  },
  {
    'term': 'Cotton Candy Scented Hand Sanitizer',
    'count': 11
  },
  {
    'term': 'Cough Relief',
    'count': 11
  },
  {
    'term': 'Depo-Medrol',
    'count': 11
  },
  {
    'term': 'Dexmedetomidine Hydrochloride',
    'count': 11
  },
  {
    'term': 'Diarrhea',
    'count': 11
  },
  {
    'term': 'Divalproex sodium',
    'count': 11
  },
  {
    'term': 'Doxercalciferol',
    'count': 11
  },
  {
    'term': 'Ethambutol Hydrochloride',
    'count': 11
  },
  {
    'term': 'Ethyl Rubbing Alcohol',
    'count': 11
  },
  {
    'term': 'Extra Strength Mapap',
    'count': 11
  },
  {
    'term': 'FENTANYL TRANSDERMAL SYSTEM',
    'count': 11
  },
  {
    'term': 'Family Wellness',
    'count': 11
  },
  {
    'term': 'Gelato Topical Anesthetic',
    'count': 11
  },
  {
    'term': 'General Protection',
    'count': 11
  },
  {
    'term': 'Good Sense Nicotine',
    'count': 11
  },
  {
    'term': 'Guaifenesin',
    'count': 11
  },
  {
    'term': 'HYDROCHLOROTHIAZIDE',
    'count': 11
  },
  {
    'term': 'Halobetasol Propionate',
    'count': 11
  },
  {
    'term': 'Hydrocodone Bitartrate and Homatropine Methylbromide',
    'count': 11
  },
  {
    'term': 'Infants Ibuprofen',
    'count': 11
  },
  {
    'term': 'Ipratropium Bromide and Albuterol Sulfate',
    'count': 11
  },
  {
    'term': 'Ketotifen Fumarate',
    'count': 11
  },
  {
    'term': 'LIDOCAINE',
    'count': 11
  },
  {
    'term': 'Lipitor',
    'count': 11
  },
  {
    'term': 'Mapap',
    'count': 11
  },
  {
    'term': 'Meropenem',
    'count': 11
  },
  {
    'term': 'Metoprolol tartrate',
    'count': 11
  },
  {
    'term': 'Midazolam HCl',
    'count': 11
  },
  {
    'term': 'Modesa',
    'count': 11
  },
  {
    'term': 'NATRUM MURIATICUM',
    'count': 11
  },
  {
    'term': 'NRG APF',
    'count': 11
  },
  {
    'term': 'Naltrexone Hydrochloride',
    'count': 11
  },
  {
    'term': 'Nasal Decongestant PE',
    'count': 11
  },
  {
    'term': 'Nitrofurantoin',
    'count': 11
  },
  {
    'term': 'Nitrostat',
    'count': 11
  },
  {
    'term': 'No7 Protect and Perfect Intense Advanced Day Cream SPF 30',
    'count': 11
  },
  {
    'term': 'PREDNISONE',
    'count': 11
  },
  {
    'term': 'Pentoxifylline',
    'count': 11
  },
  {
    'term': 'Risedronate Sodium',
    'count': 11
  },
  {
    'term': 'Rocuronium Bromide',
    'count': 11
  },
  {
    'term': 'Ropinirole',
    'count': 11
  },
  {
    'term': 'SALICYLIC ACID',
    'count': 11
  },
  {
    'term': 'SF Menthol Cough Drop',
    'count': 11
  },
  {
    'term': 'Senna Plus',
    'count': 11
  },
  {
    'term': 'Senna laxative',
    'count': 11
  },
  {
    'term': 'Senna-Lax',
    'count': 11
  },
  {
    'term': 'Sleep Aid NightTime',
    'count': 11
  },
  {
    'term': 'Sugar Free Honey Lemon Cough Drops',
    'count': 11
  },
  {
    'term': 'Tartar Control Plus',
    'count': 11
  },
  {
    'term': 'Temozolomide',
    'count': 11
  },
  {
    'term': 'Ultra Strength Gas Relief',
    'count': 11
  },
  {
    'term': 'VITAMIN D',
    'count': 11
  },
  {
    'term': 'Vaporizing Chest Rub',
    'count': 11
  },
  {
    'term': 'ZONISAMIDE',
    'count': 11
  },
  {
    'term': 'Zinc Oxide',
    'count': 11
  },
  {
    'term': 'bupropion',
    'count': 11
  },
  {
    'term': 'butalbital, acetaminophen and caffeine',
    'count': 11
  },
  {
    'term': 'celecoxib',
    'count': 11
  },
  {
    'term': 'fluconazole',
    'count': 11
  },
  {
    'term': 'hydrocortisone',
    'count': 11
  },
  {
    'term': 'medroxyprogesterone acetate',
    'count': 11
  },
  {
    'term': 'milk of magnesia',
    'count': 11
  },
  {
    'term': 'nifedipine',
    'count': 11
  },
  {
    'term': 'sugar free cherry cough drops',
    'count': 11
  },
  {
    'term': 'triple antibiotic',
    'count': 11
  },
  {
    'term': 'zaleplon',
    'count': 11
  },
  {
    'term': 'ALCOHOL FREE HAND SANITIZER',
    'count': 10
  },
  {
    'term': 'ALLIUM CEPA',
    'count': 10
  },
  {
    'term': 'Acne Treatment',
    'count': 10
  },
  {
    'term': 'Adapalene',
    'count': 10
  },
  {
    'term': 'Alcohol Prep Pads',
    'count': 10
  },
  {
    'term': 'Amantadine HCl',
    'count': 10
  },
  {
    'term': 'Amlodipine and Valsartan',
    'count': 10
  },
  {
    'term': 'Antifungal',
    'count': 10
  },
  {
    'term': 'Antimicrobial Hand Sanitizer',
    'count': 10
  },
  {
    'term': 'Arnica',
    'count': 10
  },
  {
    'term': 'Aspirin Enteric Coated',
    'count': 10
  },
  {
    'term': 'Atovaquone and Proguanil Hydrochloride',
    'count': 10
  },
  {
    'term': 'Australian Gold Broad Spectrum SPF 50',
    'count': 10
  },
  {
    'term': 'Benzethonium Chloride Solution',
    'count': 10
  },
  {
    'term': 'Bupivacaine Hydrochloride',
    'count': 10
  },
  {
    'term': 'Bupropion Hydrochloride XL',
    'count': 10
  },
  {
    'term': 'Burkhart Topical Anesthetic',
    'count': 10
  },
  {
    'term': 'CALCAREA FLUORICA',
    'count': 10
  },
  {
    'term': 'CARBIDOPA AND LEVODOPA',
    'count': 10
  },
  {
    'term': 'CEFPROZIL',
    'count': 10
  },
  {
    'term': 'CHAMOMILLA',
    'count': 10
  },
  {
    'term': 'Candida',
    'count': 10
  },
  {
    'term': 'Carbidopa and levodopa',
    'count': 10
  },
  {
    'term': 'Childrens TYLENOL',
    'count': 10
  },
  {
    'term': 'Cialis',
    'count': 10
  },
  {
    'term': 'Cold Sore Treatment',
    'count': 10
  },
  {
    'term': 'Cold and Flu Severe',
    'count': 10
  },
  {
    'term': 'Constipation',
    'count': 10
  },
  {
    'term': 'DOK',
    'count': 10
  },
  {
    'term': 'Daytime Nighttime Cold Flu Relief',
    'count': 10
  },
  {
    'term': 'Desloratadine',
    'count': 10
  },
  {
    'term': 'Dicyclomine',
    'count': 10
  },
  {
    'term': 'Diltiazem Hydrochloride Extended Release',
    'count': 10
  },
  {
    'term': 'Diovan',
    'count': 10
  },
  {
    'term': 'Dipyridamole',
    'count': 10
  },
  {
    'term': 'Duloxetine hydrochloride',
    'count': 10
  },
  {
    'term': 'ESOMEPRAZOLE MAGNESIUM',
    'count': 10
  },
  {
    'term': 'Efavirenz',
    'count': 10
  },
  {
    'term': 'Ethyl Alcohol',
    'count': 10
  },
  {
    'term': 'Eye Itch Relief',
    'count': 10
  },
  {
    'term': 'FAMOTIDINE',
    'count': 10
  },
  {
    'term': 'FERRUM PHOSPHORICUM',
    'count': 10
  },
  {
    'term': 'Fentanyl Citrate',
    'count': 10
  },
  {
    'term': 'Fleet',
    'count': 10
  },
  {
    'term': 'Guaifenesin and Dextromethorphan Hydrobromide',
    'count': 10
  },
  {
    'term': 'Healing',
    'count': 10
  },
  {
    'term': 'Hydrocodone Bitartrate and Ibuprofen',
    'count': 10
  },
  {
    'term': 'Hydromorphone HCl',
    'count': 10
  },
  {
    'term': 'Labetalol HCl',
    'count': 10
  },
  {
    'term': 'Letrozole',
    'count': 10
  },
  {
    'term': 'Levalbuterol',
    'count': 10
  },
  {
    'term': 'Lidocaine Hydrochloride and Epinephrine',
    'count': 10
  },
  {
    'term': 'Menopause',
    'count': 10
  },
  {
    'term': 'Morphine sulfate',
    'count': 10
  },
  {
    'term': 'Mucus Relief Cold Flu and Sore Throat Maximum Strength',
    'count': 10
  },
  {
    'term': 'NATRUM SULPHURICUM',
    'count': 10
  },
  {
    'term': 'Niacin',
    'count': 10
  },
  {
    'term': 'Nighttime Cold and Flu',
    'count': 10
  },
  {
    'term': 'Nimodipine',
    'count': 10
  },
  {
    'term': 'Omeprazole and Sodium Bicarbonate',
    'count': 10
  },
  {
    'term': 'POTASSIUM CHLORIDE',
    'count': 10
  },
  {
    'term': 'PROAIR HFA',
    'count': 10
  },
  {
    'term': 'Pain Release',
    'count': 10
  },
  {
    'term': 'Peptic Relief',
    'count': 10
  },
  {
    'term': 'Petroleum Jelly',
    'count': 10
  },
  {
    'term': 'Pleo Muc',
    'count': 10
  },
  {
    'term': 'Povidone-Iodine',
    'count': 10
  },
  {
    'term': 'Prednisolone',
    'count': 10
  },
  {
    'term': 'Probenecid',
    'count': 10
  },
  {
    'term': 'PureLife APF',
    'count': 10
  },
  {
    'term': 'QUETIAPINE FUMARATE',
    'count': 10
  },
  {
    'term': 'Regular Strength Aspirin EC',
    'count': 10
  },
  {
    'term': 'SENNA-S',
    'count': 10
  },
  {
    'term': 'SEROQUEL',
    'count': 10
  },
  {
    'term': 'STERILE ALCOHOL PREP PADS',
    'count': 10
  },
  {
    'term': 'SULINDAC',
    'count': 10
  },
  {
    'term': 'SUMATRIPTAN',
    'count': 10
  },
  {
    'term': 'Selenium Sulfide',
    'count': 10
  },
  {
    'term': 'Sinus Relief',
    'count': 10
  },
  {
    'term': 'Spatherapy',
    'count': 10
  },
  {
    'term': 'Supersmile',
    'count': 10
  },
  {
    'term': 'Synthroid',
    'count': 10
  },
  {
    'term': 'Systemic Detox',
    'count': 10
  },
  {
    'term': 'Tamsulosin hydrochloride',
    'count': 10
  },
  {
    'term': 'Tension Headache Relief',
    'count': 10
  },
  {
    'term': 'amlodipine besylate',
    'count': 10
  },
  {
    'term': 'basic care nicotine',
    'count': 10
  },
  {
    'term': 'bisoprolol fumarate and hydrochlorothiazide',
    'count': 10
  },
  {
    'term': 'diltiazem hydrochloride',
    'count': 10
  },
  {
    'term': 'menthol cough drop',
    'count': 10
  },
  {
    'term': 'miconazole 1',
    'count': 10
  },
  {
    'term': 'naproxen sodium',
    'count': 10
  },
  {
    'term': 'nasal',
    'count': 10
  },
  {
    'term': 'povidine iodine',
    'count': 10
  },
  {
    'term': 'ropinirole hydrochloride',
    'count': 10
  },
  {
    'term': 'sumatriptan succinate',
    'count': 10
  },
  {
    'term': 'ADVAIR DISKUS',
    'count': 9
  },
  {
    'term': 'ANTIMONIUM TARTARICUM',
    'count': 9
  },
  {
    'term': 'Acarbose',
    'count': 9
  },
  {
    'term': 'Acetylcysteine',
    'count': 9
  },
  {
    'term': 'Adult Low Dose Enteric Coated Aspirin',
    'count': 9
  },
  {
    'term': 'Advanced Healing',
    'count': 9
  },
  {
    'term': 'Alfuzosin Hydrochloride',
    'count': 9
  },
  {
    'term': 'Amiodarone hydrochloride',
    'count': 9
  },
  {
    'term': 'Amlodipine besylate',
    'count': 9
  },
  {
    'term': 'Anti Diarrheal',
    'count': 9
  },
  {
    'term': 'Arthritis Pain Reliever',
    'count': 9
  },
  {
    'term': 'Aspergillus fumigatus',
    'count': 9
  },
  {
    'term': 'Assured',
    'count': 9
  },
  {
    'term': 'BELLADONNA',
    'count': 9
  },
  {
    'term': 'BUPROPION HYDROCHLORIDE',
    'count': 9
  },
  {
    'term': 'Belladonna',
    'count': 9
  },
  {
    'term': 'Benzo-Jel',
    'count': 9
  }
]

export default medList
