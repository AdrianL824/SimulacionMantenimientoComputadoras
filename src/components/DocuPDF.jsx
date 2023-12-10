import PropTypes from "prop-types";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import "jspdf-autotable";

const DocuPDF = ({ lista }) => {
  const renderRow = (item) => (
    <View style={styles.row} key={item.id}>
      <Text style={styles.cell}>{item.n}</Text>
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
        <View style={styles.general} id="HeaderTabla">
          <Text style={styles.title}>Tabla de Resultados</Text>
          <Text style={styles.text}>
            Una vez ya corrieron los datos de la simulacion estos son guardados
            y almacenados, por lo cual se pueden ver los distintos resultados de
            las simulaciones
          </Text>
          <Text style={styles.list}>
            N°: Este es el identificador de a que numero de simulacion
            pertenecen estos resultados.
          </Text>
          <Text style={styles.list}>
            Cant maquinas: Esta es la cantidad de maquinas que se usaron para
            hacer la simulacion.
          </Text>
          <Text style={styles.list}>
            Promedio hora de uso: Este es el promedio de la horas que se uso una
            computadora hasta antes de que se descompongan.
          </Text>
          <Text style={styles.list}>
            Promedio de minutos de reparacion: Este es el promedio de minutos
            que se tardo un especialista en arreglar las maquinas descompuestas.
          </Text>
          <Text style={styles.list}>
            Precio de maquina/hora de ocio: Este es el precio por hora de una
            maquina durante el tiempo que esta descompuesta.
          </Text>
          <Text style={styles.list}>
            Salario/hora: Este es el salario del especialista por la hora de su
            trabajo arreglando las maquinas.
          </Text>
          <Text style={styles.list}>
            Precio ocio total: Este es el total del costo por mas maquinas que
            estan descompuestas.
          </Text>
          <Text style={styles.list}>
            Salario total: Este es el total a pagar al especialista por el
            tiempo que arreglo mas maquinas.
          </Text>

          <Text style={styles.concept}>
            Los resultados totales de la simulacion son:
          </Text>
          <View key={"0"} style={styles.header}>
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
  general: {
    fontSize: "10px",
    padding: 10,
  },
  title: {
    fontSize: "16px",
    padding: 10,
    textAlign: "center",
  },
  text: {
    fontSize: "11px",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  list: {
    fontSize: "10px",
    marginLeft: 13,
    marginRight: 13,
    marginBottom: 2,
  },
  concept: {
    fontSize: "10px",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
    marginTop: 6,
  },
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
