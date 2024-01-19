import React from 'react';
import NotesDetail from '../component/NotesDetail';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    const notes = this.state.note;

    if (notes === undefined) {
      return <h1 className='notfound'>Catatan Tidak Ditemukan</h1>;
    }

    return <NotesDetail {...this.state.note} />;
  }
}

DetailPage.propType = {
  getNote: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
