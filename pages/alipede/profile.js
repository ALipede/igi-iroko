import Figure from 'react-bootstrap/Figure';

function ALipedeProfile() {
  return (
    <Figure>
      <Figure.Image
        width={160}
        height={160}
        alt="A.Lipede"
        src="/images/alipede/alipede.jpg"
      />
      <Figure.Caption>
        <em>Frontend Web Developer | Web Designer:</em>
      </Figure.Caption>
    </Figure>
  );
}

export default ALipedeProfile;
