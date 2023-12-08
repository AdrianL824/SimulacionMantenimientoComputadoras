import PropTypes from "prop-types";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const DocuPDF = ({ lista }) => {
  const renderRow = (item) => (
    <View style={styles.row} key={item.id}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>100</Text>
      <Text style={styles.cell}>{item.totalUso}</Text>
      <Text style={styles.cell}>{item.totalReparacion}</Text>
      <Text style={styles.cell}>{item.precioHoraOcio}</Text>
      <Text style={styles.cell}>{item.precioEspecialista}</Text>
      <Text style={styles.cell}>{item.precioOcioTotal}</Text>
      <Text style={styles.cell}>{item.sueldoEspecialista}</Text>
    </View>
  );
  return (
    <Document>
      <Page size="A4">
        <View key={lista.id}>
          <Text>Tabla de Resultados</Text>

          <Text>Los resultados totales de la simulacion son:</Text>
          <View style={styles.header}>
            <Text style={styles.headerText}>n°</Text>
            <Text style={styles.headerText}>Cant. Maquinas</Text>
            <Text style={styles.headerText}>Total Uso</Text>
            <Text style={styles.headerText}>Total Reparacion</Text>
            <Text style={styles.headerText}>Precio Hora Ocio</Text>
            <Text style={styles.headerText}>Precio Especialista</Text>
            <Text style={styles.headerText}>Precio Ocio Total</Text>
            <Text style={styles.headerText}>Sueldo Especialista</Text>
          </View>
          {lista.map(renderRow)}
        </View>
      </Page>
    </Document>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
  },
});

DocuPDF.propTypes = {
  lista: PropTypes.array.isRequired,
};
export default DocuPDF;
