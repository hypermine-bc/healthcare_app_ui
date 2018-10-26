const participantData = [{
  $class: 'org.example.iqvia.IQVIA',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  address: {
    $class: 'org.example.iqvia.Address',
    country: '',
    city: '',
    address: '',
    mobile: '',
    zip: ''
  }
},
{
  $class: 'org.example.iqvia.Doctor',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  address: {
    $class: 'org.example.iqvia.Address',
    country: '',
    city: '',
    address: '',
    mobile: '',
    zip: ''
  }
},
{
  $class: 'org.example.iqvia.Charity',
  email: '',
  transferBalance: 0,
  firstName: '',
  lastName: '',
  password: '',
  address: {
    $class: 'org.example.iqvia.Address',
    country: '',
    city: '',
    address: '',
    mobile: '',
    zip: ''
  }
},
{
  $class: 'org.example.iqvia.Patient',
  email: '',
  transferBalance: 0,
  firstName: '',
  lastName: '',
  password: '',
  address: {
    $class: 'org.example.iqvia.Address',
    country: '',
    city: '',
    address: '',
    mobile: '',
    zip: ''
  }
},
{
  $class: 'org.example.iqvia.Pharma',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  address: {
    $class: 'org.example.iqvia.Address',
    country: '',
    city: '',
    address: '',
    mobile: '',
    zip: ''
  }
}]

const medicineData = {
  '$class': 'org.example.iqvia.Medicine',
  'MedId': '0185',
  'pharma': 'resource:org.example.iqvia.Pharma#1407',
  'MedName': '',
  'MedDescription': '',
  'MedPrice': 0
}

export { medicineData, participantData }
